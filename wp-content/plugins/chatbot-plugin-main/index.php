<?php 
/*Template Name: Custom Plugin Template
 * Plugin Name:       bot
 * Plugin URI:        https://example.com/plugins/the-basics/
 * Description:       Handle the basics with this plugin.
 * Version:           1.10.3
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            John Smith
 * Author URI:        https://author.example.com/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        https://example.com/my-plugin/
 * Text Domain:       my-basics-plugin
 * Domain Path:       /languages
 */


 //SETUP
 define('PLUGIN_DIR', plugin_dir_path(__FILE__));
 
 //INCLUDES
 include(PLUGIN_DIR . 'includes/register-blocks.php');
 
 //HOOKS
 add_action('admin_menu', 'my_plugin_setup_menu');
 add_action('admin_enqueue_scripts', 'my_plugin_enqueue_scripts');

 function my_plugin_setup_menu() {
     add_menu_page('My plugin page', 'Chatbot plugin', 'manage_options', 'chatbot-plugin', 'my_plugin_dashboard', 'dashicons-admin-generic', 6);
 }
 
 function my_plugin_enqueue_scripts($hook) {
     if ($hook != 'toplevel_page_chatbot-plugin') {
         return;
     }
 
     // Enqueue the compiled React script
     $asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');
 
     wp_enqueue_script(
         'my_plugin_react',
         plugins_url('build/index.js', __FILE__),
         $asset_file['dependencies'],
         $asset_file['version'],
         true
     );
 
     wp_enqueue_style('my_plugin_css', plugins_url('css/style.css', __FILE__));
     wp_enqueue_style('con-css', plugins_url('css/Con.css', __FILE__));
     wp_enqueue_style('ui-css', plugins_url('css/UI.css', __FILE__));
 }
 
 function my_plugin_dashboard() {
     ?>
     <div id="react-dashboard"></div>
     <?php
 }
 ?>
 

 