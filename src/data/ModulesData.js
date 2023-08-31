import catCarousel from '../assets/img/img-modules/img-productcommentplus/carousel_on_category.png';
import prodComments from '../assets/img/img-modules/img-productcommentplus/coments_display_on_product_page.png';
import formComments from '../assets/img/img-modules/img-productcommentplus/comment_form.png';
import configComments from '../assets/img/img-modules/img-productcommentplus/config-productcommentplus.png';
import homeComments from '../assets/img/img-modules/img-productcommentplus/homepage_comments.png';
import tablesComments from '../assets/img/img-modules/img-productcommentplus/modif_valide_refus.png';
import pendingTable from '../assets/img/img-modules/img-productcommentplus/pending_table.png';
import addReassurance from '../assets/img/img-modules/img-reassuranceplus/ajout_reassurance.png';
import catCarReassurance from '../assets/img/img-modules/img-reassuranceplus/category_carousel_reassurance.png';
import homeReassurance from '../assets/img/img-modules/img-reassuranceplus/homepage_reassurance.png';
import modifReassurance from '../assets/img/img-modules/img-reassuranceplus/modif_reassurance.png';
import prodReassurance from '../assets/img/img-modules/img-reassuranceplus/product_reassurance.png';
import addIcons from '../assets/img/img-modules/img-icons/add_icons.png';
import catIcons from '../assets/img/img-modules/img-icons/category_icons.png';
import homeIcons from '../assets/img/img-modules/img-icons/home_icons.png';
import listIcons from '../assets/img/img-modules/img-icons/list_icons.png';
import prodIcons from '../assets/img/img-modules/img-icons/product_icons.png';
import conf1Restriction from '../assets/img/img-modules/img-agerestrictionblur/config-restriction1.png';
import conf2Restriction from '../assets/img/img-modules/img-agerestrictionblur/config_restriction2.png';
import homeRestriction from '../assets/img/img-modules/img-agerestrictionblur/homepage_restriction.png';
import conf1Verification from '../assets/img/img-modules/img-verification/config_verification.png';
import conf2Verification from '../assets/img/img-modules/img-verification/config2_verification.png';
import homeVerification from '../assets/img/img-modules/img-verification/homepage_verification.png';
import restrictVerification from '../assets/img/img-modules/img-verification/restriction_verification.png';
import listChat from '../assets/img/img-modules/img-tchat/back-office-list_tchat.png';
import conf1tchat from '../assets/img/img-modules/img-tchat/conf1_tchat.png';
import conf2tchat from '../assets/img/img-modules/img-tchat/conf2_tchat.png';
import conf3tchat from '../assets/img/img-modules/img-tchat/conf3_tchat.png';
import iconTchat from '../assets/img/img-modules/img-tchat/front-end-icon_tchat.png';
import offlineTchat from '../assets/img/img-modules/img-tchat/offline_tchat.png';
import onlineTchat from '../assets/img/img-modules/img-tchat/online_front_back_tchat.png';
import frontTchat from '../assets/img/img-modules/img-tchat/online_front_tchat.png';

const ModulesData = [
  {
    id: 1,
    key: 'A',
    title: 'ProductCommentPlus',
    img: [
      catCarousel,
      prodComments,
      formComments,
      configComments,
      homeComments,
      tablesComments,
      pendingTable,
    ],
    description: `
    This module is designed to enable buyers to add comments to the products they have purchased.
    Additionally, the merchant has the capability to display these comments in various formats on the homepage, such as in columns or rows. 
    Furthermore, they can present the comments by product on the product page using a carousel format and by category on the category page, also as a carousel. 
    Moreover, the merchant can choose to display all the comments in the shopping cart at two different locations. 
    Furthermore, I have implemented an automated email system that sends a reminder to customers who have successfully completed and paid for an order, prompting them to leave a product review after 4 days.
  `,
  },
  {
    id: 2,
    key: 'b',
    title: 'ReassurancePlus',
    img: [
      addReassurance,
      catCarReassurance,
      homeReassurance,
      modifReassurance,
      prodReassurance,
    ],
    description: `
    This module is designed to enable buyers to add items in the reassurance block.
    For each item, the merchant can choose an image, a title and a description. It can be associated with a product, or a category as a carousel.
    We can find thoses items on the product page , category page and homepage.
    The items are responsive. They can be modifed. The image can be load from your computer.
    `,
  },
  {
    id: 3,
    key: 'c',
    title: 'AgeVerification',
    img: [
      conf1Verification,
      conf2Verification,
      homeVerification,
      restrictVerification,
    ],
    description: `
    This module immediately greets users with a page, requesting their confirmation that they are at least 18 years old.

    The configuration options enable the merchant to:
    
      - Choose a title and description.
      - Set a cookie lifetime.
      - Upload a logo.
      - Customize page colors, including the background, title, and description.
      - Select a Google font.
      - Adjust button colors.
    
    Furthermore, the merchant has the flexibility to restrict access to the entire website, specific categories, or even individual products.
    I added a custum restriction page if the visitor is not allowed in there.
    `,
  },
  {
    id: 4,
    key: 'd',
    title: 'Icon&Label',
    img: [
      addIcons,
      catIcons,
      homeIcons,
      listIcons,
      prodIcons,
    ],
    description: `
    This module empowers the merchant to enhance product images by adding icons and labels. Here are some key features:

     - Customized Placement: The merchant can precisely position these icons and labels, choosing between the upper right, upper left, lower right, or lower left corners of the product image.
    
     - Language-Linked: Icons and labels can be associated with specific languages. For instance, they can be displayed exclusively in the French version of the website.
    
     - Consistent Visibility: Regardless of whether visitors are on the homepage, category page, or product page, these icons and labels remain consistently visible in their designated locations.

     On the product page, the label seamlessly integrates into the reassurance block, accompanied by a description to inform customers about its significance.
    `,
  },
  {
    id: 5,
    key: 'e',
    title: 'AgeRestriction Blur',
    img: [
      conf1Restriction,
      conf2Restriction,
      homeRestriction,
    ],
    description: `
      This module offers an immediate, immersive experience for users, as they are presented with a blurred page and a request to confirm their age as 18 or older. While the page remains scrollable, everything is elegantly obscured.

      Within the configuration options, the merchant enjoys extensive control to:

        - Craft a personalized title and description.
        - Define the duration of the cookie's lifespan.
        - Incorporate a logo to enhance branding.
        - Tailor page aesthetics, encompassing background, title, and description colors.
        - Handpick a Google font for a distinctive touch.
        - Fine-tune button colors.
        - Specify a redirection destination when visitors click the "underaged" option.
        
      Moreover, should a user select "underaged," they are seamlessly redirected to a page chosen by the merchant. If they attempt to return to the website, they encounter the same alluring yet restrictively blurred page, prompting them to confirm their age once more.
    `,
  },
  {
    id: 6,
    key: 'f',
    title: 'TchatPlus',
    img: [
      conf1tchat,
      conf2tchat,
      conf3tchat,
      listChat,
      iconTchat,
      offlineTchat,
      onlineTchat,
      frontTchat,
    ],
    description: `
    This module facilitates real-time communication between visitors and the merchant, offering a dynamic chat feature. The merchant enjoys a range of customization options, including:

     - Chat Control: The merchant can effortlessly enable or disable the chat functionality, define operational hours, and select a timezone to accommodate multilingual interactions.
    
     - Tailored Pop-Ups: Both front-end and back-end pop-ups can be tailored to align with the merchant's branding vision. Options include choosing headers by language, crafting welcoming messages for different languages, and specifying the chat box's position as either bottom-right or bottom-left.
    
     - Visual Customization: The merchant has the creative freedom to adjust header colors, font colors, advisor message headers, and client message headers to harmonize with their brand identity.
    
     - Online and Offline Modes: The chat seamlessly transitions between online and offline modes. When offline, the merchant can configure up to five inputs to collect visitor information, which is then conveniently sent to a designated email address.
    
     - Offline Header Color: The color scheme of the offline header can also be personalized to align with the brand's aesthetics.
    
    In the back-office, messages are intelligently organized by sender, simplifying conversation management. With just a click on a specific row, the merchant can respond promptly to their interlocutors, ensuring efficient communication.

    `,
  },
];

export default ModulesData;
