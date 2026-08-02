<?php
/**
 * Jessyka Bailey theme functions.
 * - Registers the "Projects" custom post type + its fields.
 * - Renders the locked homepage via the [jessyka_home] shortcode (used by front-page.html).
 */

if ( ! defined( 'ABSPATH' ) ) exit;

/* ------------------------------------------------------------------ Projects CPT */
add_action( 'init', function () {
	register_post_type( 'jb_project', array(
		'labels' => array(
			'name'          => 'Projects',
			'singular_name' => 'Project',
			'add_new_item'  => 'Add Project',
			'edit_item'     => 'Edit Project',
			'menu_name'     => 'Projects',
		),
		'public'       => true,
		'has_archive'  => false,
		'menu_icon'    => 'dashicons-screenoptions',
		'menu_position'=> 5,
		'supports'     => array( 'title', 'editor' ),
		'rewrite'      => array( 'slug' => 'project' ),
		'show_in_rest' => true,
	) );

	foreach ( array(
		'jb_link'   => 'string',
		'jb_status' => 'string', // "live" or "soon"
		'jb_tag'    => 'string',
		'jb_desc'   => 'string',
	) as $key => $type ) {
		register_post_meta( 'jb_project', $key, array(
			'type' => $type, 'single' => true, 'show_in_rest' => true,
			'auth_callback' => function () { return current_user_can( 'edit_posts' ); },
		) );
	}
} );

/* Simple meta box for the project fields */
add_action( 'add_meta_boxes', function () {
	add_meta_box( 'jb_project_details', 'Project details', function ( $post ) {
		wp_nonce_field( 'jb_project_save', 'jb_project_nonce' );
		$link   = esc_attr( get_post_meta( $post->ID, 'jb_link', true ) );
		$status = get_post_meta( $post->ID, 'jb_status', true ) ?: 'soon';
		$tag    = esc_attr( get_post_meta( $post->ID, 'jb_tag', true ) );
		$desc   = esc_textarea( get_post_meta( $post->ID, 'jb_desc', true ) );
		echo '<p><label><strong>Status</strong><br><select name="jb_status" style="width:100%">';
		foreach ( array( 'live' => 'Live', 'soon' => 'Coming soon' ) as $v => $t ) {
			echo '<option value="' . esc_attr( $v ) . '"' . selected( $status, $v, false ) . '>' . esc_html( $t ) . '</option>';
		}
		echo '</select></label></p>';
		echo '<p><label><strong>Tag</strong> (small label)<br><input type="text" name="jb_tag" value="' . $tag . '" style="width:100%"></label></p>';
		echo '<p><label><strong>Description</strong><br><textarea name="jb_desc" rows="3" style="width:100%">' . $desc . '</textarea></label></p>';
		echo '<p><label><strong>Link</strong> (e.g. GitHub URL)<br><input type="text" name="jb_link" value="' . $link . '" style="width:100%"></label></p>';
	}, 'jb_project', 'normal', 'high' );
} );

add_action( 'save_post_jb_project', function ( $post_id ) {
	if ( ! isset( $_POST['jb_project_nonce'] ) || ! wp_verify_nonce( $_POST['jb_project_nonce'], 'jb_project_save' ) ) return;
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) return;
	if ( ! current_user_can( 'edit_post', $post_id ) ) return;
	foreach ( array( 'jb_link', 'jb_status', 'jb_tag', 'jb_desc' ) as $k ) {
		if ( isset( $_POST[ $k ] ) ) update_post_meta( $post_id, $k, sanitize_text_field( wp_unslash( $_POST[ $k ] ) ) );
	}
} );

/* ------------------------------------------------------------------ Enqueue counter script on the front page */
add_action( 'wp_enqueue_scripts', function () {
	// Block child themes must enqueue their own style.css.
	wp_enqueue_style( 'jessyka-blog', get_stylesheet_uri(), array(), '1.0.0' );
	if ( is_front_page() ) {
		wp_enqueue_script( 'jb-front', get_theme_file_uri( 'assets/jb.js' ), array(), '1.0.0', true );
	}
} );

/* ------------------------------------------------------------------ Homepage render */
function jb_project_card( $index ) {
	$status = get_post_meta( get_the_ID(), 'jb_status', true );
	$tag    = get_post_meta( get_the_ID(), 'jb_tag', true );
	$desc   = get_post_meta( get_the_ID(), 'jb_desc', true );
	$link   = get_post_meta( get_the_ID(), 'jb_link', true );
	$url    = $link ? $link : get_permalink();
	$repo   = ( $link && preg_match( '#github\.com/([^/]+/[^/]+?)(?:\.git|/|$)#', $link, $m ) ) ? $m[1] : '';

	if ( $status === 'live' ) {
		ob_start(); ?>
		<a class="jb-proj jb-live" href="<?php echo esc_url( $url ); ?>"<?php echo $link ? ' target="_blank" rel="noopener"' : ''; ?><?php echo $repo ? ' data-repo="' . esc_attr( $repo ) . '"' : ''; ?>>
			<span class="jb-ptop">
				<span class="jb-tag"><?php echo esc_html( $tag ?: 'Free · Open source' ); ?></span>
				<span class="jb-count" data-count>Be the first</span>
			</span>
			<span class="jb-pt"><?php the_title(); ?></span>
			<span class="jb-pd"><?php echo esc_html( $desc ?: '' ); ?></span>
			<span class="jb-go">Get it →</span>
		</a>
		<?php return ob_get_clean();
	}
	ob_start(); ?>
	<a class="jb-proj jb-soon" href="<?php echo esc_url( get_permalink() ); ?>">
		<span class="jb-tag"><?php echo esc_html( $tag ?: 'In progress' ); ?></span>
		<span class="jb-pt"><?php the_title(); ?></span>
		<span class="jb-go">Coming soon</span>
	</a>
	<?php return ob_get_clean();
}

/* Shared header + footer (used by the homepage render and by every other template) */
function jb_nav_current( $which ) {
	$is = false;
	if ( $which === 'home' )     $is = is_front_page();
	elseif ( $which === 'blog' ) $is = ( is_home() || is_singular( 'post' ) );
	elseif ( $which === 'projects' ) $is = ( is_page( 'projects' ) || is_singular( 'jb_project' ) || is_post_type_archive( 'jb_project' ) );
	return $is ? ' aria-current="page"' : '';
}
function jb_header_html() {
	$home = home_url( '/' ); $blog = home_url( '/blog/' ); $proj = home_url( '/projects/' );
	ob_start(); ?>
	<header class="jb-header">
		<div class="jb-wrap jb-topbar">
			<a class="jb-brand" href="<?php echo esc_url( $home ); ?>" aria-label="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?> — home"><?php echo esc_html( get_bloginfo( 'name' ) ); ?></a>
			<nav class="jb-nav">
				<a href="<?php echo esc_url( $home ); ?>"<?php echo jb_nav_current( 'home' ); ?>>Home</a>
				<a href="<?php echo esc_url( $blog ); ?>"<?php echo jb_nav_current( 'blog' ); ?>>Blog</a>
				<a href="<?php echo esc_url( $proj ); ?>"<?php echo jb_nav_current( 'projects' ); ?>>Projects</a>
			</nav>
		</div>
	</header>
	<?php return preg_replace( '/>\s+</', '><', ob_get_clean() );
}
function jb_footer_html() {
	ob_start(); ?>
	<footer class="jb-sec jb-foot"><div class="jb-wrap"><p>© <?php echo esc_html( date( 'Y' ) ); ?> <?php echo esc_html( get_bloginfo( 'name' ) ); ?></p></div></footer>
	<?php return preg_replace( '/>\s+</', '><', ob_get_clean() );
}
add_shortcode( 'jb_header', 'jb_header_html' );
add_shortcode( 'jb_footer', 'jb_footer_html' );

/* Blog list — posts as pills (used on the Blog page) */
function jb_blog_render() {
	$q = new WP_Query( array( 'post_type' => 'post', 'posts_per_page' => 50, 'ignore_sticky_posts' => true ) );
	ob_start();
	echo '<div class="jb-bloglist">';
	if ( $q->have_posts() ) {
		while ( $q->have_posts() ) { $q->the_post();
			echo '<a class="jb-post" href="' . esc_url( get_permalink() ) . '"><span class="jb-t">' . esc_html( get_the_title() ) . '</span><span class="jb-arw">→</span></a>';
		}
	} else {
		echo '<p class="jb-empty">No posts yet.</p>';
	}
	wp_reset_postdata();
	echo '</div>';
	return preg_replace( '/>\s+</', '><', ob_get_clean() );
}
add_shortcode( 'jb_blog', 'jb_blog_render' );

/* Projects list — the card grid (used on the Projects page) */
function jb_projects_render() {
	$pq = new WP_Query( array( 'post_type' => 'jb_project', 'posts_per_page' => -1, 'orderby' => 'menu_order date', 'order' => 'ASC' ) );
	ob_start();
	echo '<div class="jb-projgrid jb-projgrid-page">';
	$count = 0;
	if ( $pq->have_posts() ) {
		while ( $pq->have_posts() ) { $pq->the_post(); echo jb_project_card( $count ); $count++; }
	}
	wp_reset_postdata();
	echo '</div>';
	return preg_replace( '/>\s+</', '><', ob_get_clean() );
}
add_shortcode( 'jb_projects', 'jb_projects_render' );

/* Post metadata row — publication date + estimated reading time + author byline */
function jb_post_meta_render() {
	$id = get_the_ID();
	if ( ! $id ) return '';
	$words  = str_word_count( wp_strip_all_tags( get_post_field( 'post_content', $id ) ) );
	$mins   = max( 1, (int) ceil( $words / 200 ) );
	$date   = get_the_date( 'F j, Y', $id );
	$author = get_the_author_meta( 'display_name', (int) get_post_field( 'post_author', $id ) );
	$out  = '<div class="jb-meta">';
	$out .= '<time datetime="' . esc_attr( get_the_date( 'c', $id ) ) . '">' . esc_html( $date ) . '</time>';
	$out .= '<span aria-hidden="true">·</span><span>' . intval( $mins ) . ' min read</span>';
	if ( $author ) {
		$out .= '<span aria-hidden="true">·</span><span class="jb-byline">' . esc_html( $author ) . '</span>';
	}
	$out .= '</div>';
	return $out;
}
add_shortcode( 'jb_post_meta', 'jb_post_meta_render' );

/* TL;DR block — renders the post's manual excerpt as a summary above the article body.
   Only appears when the post has an excerpt, so it scales across posts without empty blocks. */
function jb_tldr_render() {
	$id = get_the_ID();
	if ( ! $id ) return '';
	$excerpt = get_post_field( 'post_excerpt', $id );
	if ( '' === trim( (string) $excerpt ) ) return '';
	return '<div class="jb-tldr"><span class="jb-tldr-label">TL;DR</span><p>' . esc_html( $excerpt ) . '</p></div>';
}
add_shortcode( 'jb_tldr', 'jb_tldr_render' );

function jessyka_home_render() {
	$photo = get_theme_file_uri( 'assets/portrait.svg' );
	$home  = home_url( '/' );
	$blog  = home_url( '/blog/' );
	$proj  = home_url( '/projects/' );

	ob_start(); ?>
	<div id="jb">
		<?php echo jb_header_html(); ?>

		<section class="jb-sec jb-sec1">
			<div class="jb-wrap">
				<div class="jb-hero">
					<div class="jb-writing">
						<div class="jb-whead"><p class="jb-lab">Writing</p><span class="jb-all"><a href="<?php echo esc_url( $blog ); ?>">All posts →</a></span></div>
						<div class="jb-cards">
							<?php
							$posts = new WP_Query( array( 'post_type' => 'post', 'posts_per_page' => 4, 'ignore_sticky_posts' => true ) );
							if ( $posts->have_posts() ) {
								while ( $posts->have_posts() ) { $posts->the_post();
									echo '<a class="jb-post" href="' . esc_url( get_permalink() ) . '"><span class="jb-t">' . esc_html( get_the_title() ) . '</span><span class="jb-arw">→</span></a>';
								}
							}
							wp_reset_postdata();
							?>
						</div>
					</div>
					<figure class="jb-photo"><img src="<?php echo esc_url( $photo ); ?>" alt="Jessyka Bailey" width="900" height="1200"></figure>
				</div>
			</div>
		</section>

		<section class="jb-sec jb-sec2">
			<div class="jb-wrap">
				<div class="jb-whead"><p class="jb-lab">Projects</p><span class="jb-all"><a href="<?php echo esc_url( $proj ); ?>">All projects →</a></span></div>
				<div class="jb-projgrid">
					<?php
					$count = 0;
					$pq = new WP_Query( array( 'post_type' => 'jb_project', 'posts_per_page' => 4, 'orderby' => 'menu_order date', 'order' => 'ASC' ) );
					if ( $pq->have_posts() ) {
						while ( $pq->have_posts() ) { $pq->the_post(); echo jb_project_card( $count ); $count++; }
					}
					wp_reset_postdata();
					for ( $i = $count; $i < 4; $i++ ) {
						echo '<span class="jb-proj jb-soon"><span class="jb-tag">In progress</span><span class="jb-pt">—</span><span class="jb-go">Coming soon</span></span>';
					}
					?>
				</div>
			</div>
		</section>

		<?php echo jb_footer_html(); ?>
	</div>
	<?php
	// Collapse whitespace between tags so wpautop can't inject <br>/<p> into the layout.
	return preg_replace( '/>\s+</', '><', ob_get_clean() );
}
add_shortcode( 'jessyka_home', 'jessyka_home_render' );
