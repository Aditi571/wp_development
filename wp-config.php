<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '!d}?Y0*oZHKL+8`N/o${p&^*L>W9yu@FG>M%b+d4Lx]6o.baI&u6R8>2.e,Sop,Q' );
define( 'SECURE_AUTH_KEY',   '~6*3[0TP_:I*M$X~v]@{pePOe{nYJHI4 ,NxedkmvFro`_N4A HM7DY#=G/;DRN*' );
define( 'LOGGED_IN_KEY',     'Rv% JTT%ZIlpJ6Tzzl4jKsliL*$ap6R4}ZiF 9DuV}OpH`kc{KNMysDU{?kf$Fs]' );
define( 'NONCE_KEY',         ',&Oqp3H3hN$&Rg?tb(L?a*?H$SZmEV A7aIk8:&l[MLWW$5Sw*jmK]/&M~<v,%~-' );
define( 'AUTH_SALT',         '~UDvf93CrB9Bi8T7*jY|LPd<WWewW&>]>?,Y<gkF9/_6x!P4=K|pPwG.cuhg!^c]' );
define( 'SECURE_AUTH_SALT',  'M`?ymgCHz0C)U=xEY78^j0[jZi2k8u`ZF?}G>G~IGIoauZ9+?|F[B@kz@g.[+(`@' );
define( 'LOGGED_IN_SALT',    'ACc*cDQ/<oJrXZ_ascy3(30x3@U3mpg$]w)m:-v/aD78;M;M(TEPd)@v=s2F#MIS' );
define( 'NONCE_SALT',        'ni]*$RBg[HcmeWx/MPJ^^R}?:4_?=eY5c?,S#7h?X}b~Tb ) kd<1+mtwBU}FVDd' );
define( 'WP_CACHE_KEY_SALT', '.K}Y;mW<K62zf9])R[q2y@.>4b&Uouc~YyJd+9kB&i<Lei&s};iY@jepspt,$pK@' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
