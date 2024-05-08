import { getWixClient } from '@app/hooks/useWixClientServer';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import testIds from '@app/utils/test-ids';

export default async function Project({ params }: any) {
  const wixClient = await getWixClient();
  const { items } = await wixClient.items
    .queryDataItems({
      dataCollectionId: 'Our-Projects',
    })
    .eq('slug', params.slug)
    .find();
  const project = items![0];

  return (
    <div
      className="relative"
      data-testid={testIds.PROJECT_DETAILS_PAGE.CONTAINER}
    >
      <div className="w-full h-[400px] relative">
        <WixMediaImage
          media={project.data!.cover}
          alt={project.data!.title}
          objectFit="cover"
          sizes="100vw"
          disableZoom={true}
        />
      </div>
      <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20 text-center">
        <h1 className="py-8 font-site">{project.data!.title}</h1>
        <p className="pt-6 max-w-3xl text-sm mx-auto">
          {project.data!.short_description}
        </p>
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:image" content="https://content.app-sources.com/s/94875689938167925/uploads/admin-files/icon-6192902.png">
    <meta property="og:type" content="website">
    <meta name="google" content="notranslate">

    

    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">

    <link rel="shortcut icon" href="https://content.app-sources.com/s/94875689938167925/uploads/admin-files/icon-6192902.png">
    <link rel="apple-touch-icon image_src" href="https://content.app-sources.com/s/94875689938167925/uploads/admin-files/icon-6192902.png">

    
    
      
      
        <link rel="stylesheet" type="text/css" id="googleFontsLink" href="https://fonts.googleapis.com/css?family=Open+Sans%7CRoboto:300,400%7CRoboto:300,400%7CNoto+Sans+SC:700">
      
    
    
    





    
      
        <link href="https://static.web-repository.com/styles/platform.min.css?v=923" type="text/css" rel="stylesheet">
        <link href="https://static.web-repository.com/components/svelte-components.css?v=923" type="text/css" rel="stylesheet">
      
      
    

    <!--[if lt IE 10]>
    <script type="text/javascript">
      window.isIELessThan10 = true;
    </script>
    <![endif]-->

    

      
      
        
        
        
      
      
    

    <title>Website</title>
  <link rel="stylesheet" id="style-main" type="text/css" href="https://static.web-repository.com/t/theme25/css/trunk.min.css?v=923"></head>

  <body class="light-theme                            header-skin-1         header-skins-icons-2         builder-with-side-nav         non-padded-working-area         builder-controls-circles         left-builder-controls         light-builder-controls         builder-controls-icons-1         rounded-inputs          default-add-widget-icons          default-add-widget          action-line-none          dash-skin-default                   dash-skin-with-icons         default-heading-bg         light-popups         ltr-language         project-status-expired         cpanel-background  with-notification-lane narrow-nav" data-cjcrx="addYes">


    

    

    <!-- Clipboard -->
    <div class="clipboard-wrapper closed">
      <div class="clipboard-overlay"></div>
      <div class="clip-icon"></div>
      <div class="clip-scale">
        <h4>Saved Blocks &amp; Elements</h4>
        <ul class="upper-navigation upper-navigation-full mb-15">
          <li><a data-show="copied" class="active">Copied</a></li>
          <li><a data-show="saved">Saved</a></li>
        </ul>
        <span class="clipboard-info">Drag &amp; Drop into your working area</span>
        <div class="col20 f-left" data-role="copied">
          <div class="col20 f-left t-center mt-15 clear-btn">
            <a class="clear rounded-effect">clear</a>
          </div>
          <div class="clip-container custom-scroll"></div>
        </div>
        <div class="col20 f-left none" data-role="saved">
          <div class="clip-container custom-scroll"></div>
        </div>
      </div>
    </div>
    <div id="cpanel-ajax-overlay" style="display: none;" class="">
      <div>
        <img src="https://static.web-repository.com/images/working.GIF">
      </div>
    </div>
    
      
      
      
        <div class="main-navigation">
          <div class="builder-navigation light-nav"> 
            <div class="cpanel-left-wrapper">
              <div class="left-nav">
                <ul>
                  
                    <li class="builder-logo">
                      <img style="max-width: 55px; max-height: 55px;" src="https://content.app-sources.com/s/94875689938167925/uploads/admin-files/looogo-6193104.png">
                    </li>
                  
                  <li class="themes-button">
                    <a href="https://patooworld.com/me/dashboard" rel="tab">Dashboard</a>
                  </li>
                  
                    <li class="settings-button">
                      <a href="https://patooworld.com/logout">Logout</a>
                    </li>
                  
                  
                  
                    <li class="switch-button none">
                      <a id="switchContextBtn" class="button-tooltip" rel="action" data-action="showWebsitesDialog" data-target="Project">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" xml:space="preserve" viewBox="0 0 482.9 482.9" class="" style="enable-background:new 0 0 482.9 482.9;">

                        <path d="M239.7,260.2c0.5,0,1,0,1.6,0c0.2,0,0.4,0,0.6,0c0.3,0,0.7,0,1,0c29.3-0.5,53-10.8,70.5-30.5
                              c38.5-43.4,32.1-117.8,31.4-124.9c-2.5-53.3-27.7-78.8-48.5-90.7C280.8,5.2,262.7,0.4,242.5,0h-0.7c-0.1,0-0.3,0-0.4,0h-0.6
                              c-11.1,0-32.9,1.8-53.8,13.7c-21,11.9-46.6,37.4-49.1,91.1c-0.7,7.1-7.1,81.5,31.4,124.9C186.7,249.4,210.4,259.7,239.7,260.2z
                              M164.6,107.3c0-0.3,0.1-0.6,0.1-0.8c3.3-71.7,54.2-79.4,76-79.4h0.4c0.2,0,0.5,0,0.8,0c27,0.6,72.9,11.6,76,79.4
                              c0,0.3,0,0.6,0.1,0.8c0.1,0.7,7.1,68.7-24.7,104.5c-12.6,14.2-29.4,21.2-51.5,21.4c-0.2,0-0.3,0-0.5,0l0,0c-0.2,0-0.3,0-0.5,0
                              c-22-0.2-38.9-7.2-51.4-21.4C157.7,176.2,164.5,107.9,164.6,107.3z"></path>
                        <path d="M446.8,383.6c0-0.1,0-0.2,0-0.3c0-0.8-0.1-1.6-0.1-2.5c-0.6-19.8-1.9-66.1-45.3-80.9c-0.3-0.1-0.7-0.2-1-0.3
                              c-45.1-11.5-82.6-37.5-83-37.8c-6.1-4.3-14.5-2.8-18.8,3.3c-4.3,6.1-2.8,14.5,3.3,18.8c1.7,1.2,41.5,28.9,91.3,41.7
                              c23.3,8.3,25.9,33.2,26.6,56c0,0.9,0,1.7,0.1,2.5c0.1,9-0.5,22.9-2.1,30.9c-16.2,9.2-79.7,41-176.3,41
                              c-96.2,0-160.1-31.9-176.4-41.1c-1.6-8-2.3-21.9-2.1-30.9c0-0.8,0.1-1.6,0.1-2.5c0.7-22.8,3.3-47.7,26.6-56
                              c49.8-12.8,89.6-40.6,91.3-41.7c6.1-4.3,7.6-12.7,3.3-18.8c-4.3-6.1-12.7-7.6-18.8-3.3c-0.4,0.3-37.7,26.3-83,37.8
                              c-0.4,0.1-0.7,0.2-1,0.3c-43.4,14.9-44.7,61.2-45.3,80.9c0,0.9,0,1.7-0.1,2.5c0,0.1,0,0.2,0,0.3c-0.1,5.2-0.2,31.9,5.1,45.3
                              c1,2.6,2.8,4.8,5.2,6.3c3,2,74.9,47.8,195.2,47.8s192.2-45.9,195.2-47.8c2.3-1.5,4.2-3.7,5.2-6.3
                              C447,415.5,446.9,388.8,446.8,383.6z"></path>
                        </svg>
                      </a>
                    </li>
                  
                </ul>
              </div>
              <div class="subnav-controls">

                <!-- WEBSITE -->
                <div class="left-subnav left-subnav-small mainNav transition-opacity active" id="websiteNav">

                  <div class="help-mobile-wrapper-inner">
                    

                    <div class="viewport-buttons gray-viewport-buttons" style="display: block;">
                      <ul>
                        <li>
                          <a class="button-tooltip active" data-size="desktop" data-tooltip="desktopView" rel="action" data-action="changeViewport">
                            <img src="https://static.web-repository.com/images/small-icons/desktop-gray.png">
                          </a>
                        </li>
                        <li>
                          <a class="button-tooltip" data-size="tablet" data-tooltip="tabletView" rel="action" data-action="changeViewport">
                            <img src="https://static.web-repository.com/images/small-icons/tablet-gray.png">
                          </a>
                        </li>
                        <li>
                          <a class="button-tooltip" data-size="mobile" data-tooltip="phoneView" rel="action" data-action="changeViewport">
                            <img src="https://static.web-repository.com/images/small-icons/phone-gray.png">
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="buttons-wrapper">
                    <a data-tooltip="pages" id="pagesBtnSmall" class="pagesBtnSmall middle-button pages button-tooltip system-border-color-active system-bg-color-active system-bg-color-hover system-border-color-hover"><i class="material-icons"> post_add </i><i class="material-icons-outlined builder-icon-style-3"> toc </i></a>
                    <a data-tooltip="addwidget" id="addWidgetBtnSmall" class="middle-button add button-tooltip system-border-color-active system-bg-color-active system-bg-color-hover system-border-color-hover" style="display: inline;"><i class="material-icons"> control_point </i><i class="material-icons-outlined builder-icon-style-3"> add_to_queue </i></a>
                    <a data-tooltip="globalStyling" id="globalStyling" class="middle-button button-tooltip system-border-color-active system-bg-color-active system-bg-color-hover system-border-color-hover"><i class="material-icons" style="font-size:26px;"> format_shapes </i><i class="material-icons builder-icon-style-3" style="font-size:26px;"> brush </i></a>
                    
                      <a data-tooltip="funnels" id="funnels" rel="action" data-action="edit" data-target="Funnels" class="funnels-show-btn middle-button button-tooltip system-border-color-active system-bg-color-active system-bg-color-hover system-border-color-hover"><i class="material-icons" style="font-size:39px"> filter_list </i><i class="material-icons-outlined builder-icon-style-3" style="font-size:39px"> filter_list </i>
                        <div class="funnel-hint lazyAnimation-bounceInRight">
                          <i class="material-icons-outlined f-left mr-10"> filter_list </i>
                          <h3 class="hint-title">Funnel Steps &amp; Controls</h3>
                        </div>
                      </a>
                    
                    <a data-tooltip="themesettings" id="themeSettingsBtnSmall" class="middle-button tsettings button-tooltip system-border-color-active system-bg-color-active system-bg-color-hover system-border-color-hover"><i class="material-icons-outlined" style="font-size: 30px;"> settings </i><i class="material-icons-outlined builder-icon-style-3"> settings </i></a>
                    <a data-tooltip="websitepreview" id="previewButtonSmall" class="middle-button preview button-tooltip system-border-color-active system-bg-color-active system-bg-color-hover system-border-color-hover"><i class="material-icons-outlined"> visibility </i><i class="material-icons-outlined builder-icon-style-3"> open_in_new </i></a>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="store-navigation dark-nav light-nav">
            <a href="https://patooworld.com/me/website" rel="tab" class="gray middle-button back-to-builder"><p>←</p>Edit Website</a>
            
            <div class="engage-main-nav compact-store-nav">
              <a data-menu="" href="https://patooworld.com/me/store" rel="tab" class="engage-main-link button-tooltip active" data-tooltip="dashboard">
                <span class="material-icons-outlined"> dashboard </span>
              </a>
              <a data-menu="orders" href="https://patooworld.com/me/store/orders" rel="tab" class="engage-main-link button-tooltip" data-tooltip="orders">
                <span class="material-icons-outlined"> shopping_basket </span>
              </a>
              <a data-menu="products" href="https://patooworld.com/me/store/products" rel="tab" class="engage-main-link button-tooltip" data-tooltip="products">
                <span class="material-icons-outlined"> list_alt </span>
              </a>
              <a data-menu="subscriptions" href="https://patooworld.com/me/store/subscriptions" rel="tab" class="engage-main-link button-tooltip" data-tooltip="subscriptions">
                <span class="material-icons-outlined"> card_membership </span>
              </a>
              <a data-menu="discounts" href="https://patooworld.com/me/store/discounts" rel="tab" class="engage-main-link button-tooltip" data-tooltip="discounts">
                <span class="material-icons-outlined"> label_off </span>
              </a>
              <a data-menu="styling" href="https://patooworld.com/me/store/styling" rel="tab" class="engage-main-link button-tooltip" data-tooltip="styling">
                <span class="material-icons-outlined"> brush </span>
              </a>
              <a data-menu="settings" href="https://patooworld.com/me/store/settings" rel="tab" class="engage-main-link button-tooltip" data-tooltip="settings">
                <span class="material-icons-outlined"> settings </span>
              </a>
            </div>
            <div class="website-actions" id="storeNav">

              <div class="filter-nav flex-none ta-left">
                <!--<h3>E-Commerce</h3>-->
                <h3>E-Commerce</h3>
                <span style="color: #999; line-height: 1.4;">Start selling products and collecting payments in no time.</span>
                <ul class="larger-nav f-left larger-nav-with-icons mb-10">
                  <li data-menu="">
                    <a rel="tab" href="https://patooworld.com/me/store">
                      <span><span class="material-icons-outlined"> dashboard </span>Dashboard</span>
                      <span></span>
                    </a>
                  </li>
                  <li data-menu="orders">
                    <a rel="tab" href="https://patooworld.com/me/store/orders">
                      <span><span class="material-icons-outlined"> shopping_basket </span>Orders</span>
                      <span></span>
                    </a>
                    <div class="large-nav-submenu">
                      <a href="https://patooworld.com/me/website">All Orders</a>
                      <a href="https://patooworld.com/me/website">Abandon Carts</a>
                    </div>
                  </li>
                  <li data-menu="products">
                    <a rel="tab" href="https://patooworld.com/me/store/products">
                      <span><span class="material-icons-outlined"> list_alt </span>Products</span>
                      <span></span>
                    </a>
                  </li>
                  <li data-menu="subscriptions">
                    <a rel="tab" href="https://patooworld.com/me/store/subscriptions">
                      <span><span class="material-icons-outlined"> card_membership </span>Subscriptions</span>
                      <span></span>
                    </a>
                  </li>
                  <!--
                  <li class="services" data-menu="new-affiliates">
                    <a rel="tab" href="/me/store/new-affiliates">
                      <span><span class="material-icons-outlined"> how_to_reg </span>Affiliates</span>
                      <span></span>
                    </a>
                  </li>-->
                  <li data-menu="discounts">
                    <a rel="tab" href="https://patooworld.com/me/store/discounts">
                      <span><span class="material-icons-outlined"> label_off </span>Discounts</span>
                      <span></span>
                    </a>
                  </li>
                  <li data-menu="styling">
                    <a rel="tab" href="https://patooworld.com/me/store/styling">
                      <span><span class="material-icons-outlined"> brush </span>Layout &amp; Styling</span>
                      <span></span>
                    </a>
                  </li>
                  <li data-menu="settings">
                    <a rel="tab" href="https://patooworld.com/me/store/settings">
                      <span><span class="material-icons-outlined"> settings </span>Settings</span>
                      <span></span>
                    </a>
                  </li>
                  <li class="store-preview-btn none">
                    <a rel="tab" href="https://patooworld.com/me/store/settings">
                      <span><span class="material-icons-outlined"> visibility </span>Preview Store</span>
                      <span></span>
                    </a>
                  </li>
                </ul>
                <a rel="action" data-action="previewStore" class="border-button mt-5 circle-effect">Preview Store</a>
                <a href="https://patooworld.com/me/website" rel="tab" class="middle-button blue mt-5">Edit Store Pages</a>
              </div>
            </div>
            
        <p className="py-6 max-w-3xl text-sm mx-auto">
          {project.data!.long_description}
        </p>
        <a href="" className="btn-main">
          Donate
        </a>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 grid-flow-row mt-10">
          {project.data!.gallery?.map((image: any, i: number) => (
            <div key={i} className="p-4 relative">
              <WixMediaImage media={image.src} width={500} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
