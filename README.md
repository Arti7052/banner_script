# banner_script

How to Use the Script in a Third-Party Webpage

To integrate the banner, add the following <script> tag inside the <body> section of your HTML file:

<script 
    src="http://localhost/banner_script/banner.js" 
    data-api="https://yourdomain.com/get_banner.php" 
    data-position="top"
    data-width="300"
    data-height="100">
</script>

Explanation of Attributes

Attribute	          Description	                          Example Values	                                        Default
src	                The URL of the banner.js file.	      http://localhost/banner_script/banner.js"	              Required
data-api	          API URL that provides banner data.	  https://yourdomain.com/get_banner.php	                  Required
data-position	      Where to place the banner on the page.  top, bottom, left, right                             	Optional
data-width	        Width of the banner (in pixels).	      600 (Default) 											                  Optional
data-height	        Height of the banner (in pixels).	      250 (Default)											                    Optional
