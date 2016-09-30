<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * e.g., it puts together the home page when no home.php file exists.
 *
 * Learn more: {@link https://codex.wordpress.org/Template_Hierarchy}
 *
 * @package enterwell
 * @subpackage wp-vladimir
 */

  // WP header
  get_header(); 
?>
  <!-- Navigation -->
  <nav>
    <!-- Logo -->
    <a href="http://enterwell.net">
      <img class="logo" src="<?php echo THEME_URL ?>/assets/images/logo.png" alt="enterwell.net" />
    </a>

    <!-- Global styles applied. See react/src/styles/main.scss-->
    <div id="navigation-node">
      <span class="loading"></span>
    </div>
  </nav>

  <!-- Main container -->
  <main>
    <!-- Before we start -->
    <section class="section-container">
      <header>
        <h2>Intro</h2>
      </header>
      <section class="section">
        <p>
          This is the starter WordPress theme that will allow you to easily include React.js and Redux into your WordPress site.
          </br>
          If you know how to use React and Redux, then you should skip to the <a href="github-container">GitHub repo</a>.
          </br>
          But, if you don't know hot to use them, please continue reading this.
        </p>

        <h3>React</h3>
        <p>
          <a href="https://facebook.github.io/react/docs/getting-started.html" target="_blank">Just follow this and be patient.</a>
        </p>

        <h3>Redux</h3>
        <p>
          <a href="http://redux.js.org/docs/introduction/" target="_blank">Again, follow this tutorial.</a>
          <br/>
          Remember, patience is the virtue of patient people.
        </p>

        <h3>WordPress API</h3>
        <p>
          And for the last time: tutorial, patience and good will.
          <br/>
          <a href="http://v2.wp-api.org/extending/adding/" target="_blank">Learn how to make controllers</a>
          <br/>
          <a href="http://v2.wp-api.org/guide/authentication/" target="_blank">Learn something about authentication</a>
        </p>
      </section>
    </section>

    <!-- Example -->
    <section class="section-container">
      <header>
        <h2>React counter example</h2>
      </header>
      <section class="section">
        <!-- Global styles applied. See react/src/styles/main.scss-->
        <div id="content-node">
          <span class="loading"></span>
        </div>
      </section>
    </section>

    <!-- GitHub -->
    <section id="github-container" class="section-container">
      <header>
        <h2>GitHub repository</h2>
      </header>
      <section class="section">
        Just check it out: <a href="https://github.com/Enterwell/wp-vladimir">Enterwell Vladimir</a>
      </section>
    </section>

    <section class="made-with-love">
      Made with <span>&hearts;</span> by <a href="http://enterwell.net">Enterwell</a>
    </section>
  </main>

  <!-- Import react scripts -->
  <!-- Change this when you build for production -->
  <script type="text/javascript" src="http://localhost:3000/bundle.js"></script>
<?php 
  // WP FOOTER
  get_footer();
?>