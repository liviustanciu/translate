export default {
  /** @see ProductRatingView **/
  surveys: ["Very poor", "Poor", "Normal", "Good", "Excellent"],


  /** @see ShopFooter **/
  footer: {
    map: "Map",
    email: "Email",
    phone: "Phone",
    address: "Address",

    copyright:
      "The use of content only for non-commercial purposes and with reference to the source (link with {shop_title}). All rights reserved to {shop_title}.",
    powered_by: "Powered by",
    privacy: "Privacy policy",
    term_of_use: "Term of use",
    shop_app_setting: "Shop setting & GDPR",

    dialog_setting: {
      title: "Shop Applications Setting",
      app_list: "List of applications",
    },
  },

  /** @see ProductCard **/
  product_card: {
    sold_out: "Sold out",
    review_unit: "review",
    not_original: "Not original",
  },

  /** @see ShopPage **/
  /** @see Shop **/
  shop: {
    products_filter: "Filter",
    native: {
      title: "Application Login",
      message:
        "This app requires access to your store account information. This includes access to name, contact number, address, email, order history, ordering and posting comments on this store.",
      message_bold:
        "Be sure to use the official store app to enter this store.",
    },
  },

  /** @see SortView **/
  sort: {
    title: "Sort by",
    title_small: "Sort by..",
    nothing: "Nothing",
    most_views: "Most views",
    most_likes: "Most Popular",
    most_recent: "Newest",
    most_sell: "Bestselling",
    cheapest: "Cheapest",
    most_expensive: "Most expensive",
    only_available: "Available",
    view_mode: {
      normal: "Normal",
      grid: "Grid",
      list: "List",
      insta: "Insta",
    },
  },

  /** @see ProductInfo **/
  product_info: {
    fake: "Fake",
    action: "Auction",
    compare_limit: "10 items limit",
    compare_add: "Add to Compare",
    compare_be_in_list: "In compare list",

    type: "Type",
    brand: "Brand",
    category: "Category",
    discount: "Discount",
    track_price: "Track price",
    waiting_for_auction: "Waiting for auction?",
    inform_auction: "Tell me about auction",
    return_in_days: "{days} Days Warranty Return",
    support24h7: "Support 24 hours 7 days",
    support_normal: "Working hours support",
    original_guarantee: "Original guarantee",
    cod_payment: "Cash on delivery support",

    pros: "Pros",
    cons: "Cons",

    external_link: "Read More",
    notifications: {
      congratulation: "Congratulations",
      waiting_list_add_success:
        "We will notify you when this product is auctioned.",
      waiting_list_delete_success: "You exited from the auction waiting list.",
    },

    offer_message: "Buy {min_quantity} Get {percent}% off for these items",
    up_to: "Up to {per_order}x per order",
    get_free: "GET FREE",
    get_off: "GET {percent}% OFF",
  },

  /** @see BuyButton **/

  buy_button: {
    waiting_for_availability: "Waiting for availability",
    inform_me_when_available: "Waiting for this?",
    pay_buy: "Pay & Buy",
    quantity: "Count",
    quantity_in_basket: "Items in cart",
    count_unit: "x",
    remove: "Remove",
    add_to_basket: "Add to cart",
    buy: "Buy",
    notifications: {
      inform_add_success: "We'll let you know when it's available.",
      inform_remove_success: "You have been removed from the waiting list.",
    },
  },

  /** @see ProductPage **/

  product: {
    review: "Review",
    spec: "Spec",
    comments: "Comments",
    related_products_title: "Related products",
    price: "Price",
    rate: "Rate",
    comment: "comment",
  },

  /** @see LayoutShop **/
  layout_shop: {
    shop_menu: {
      orders_history: "Order History",
      profile: "Profile",
      favorites: "My Favorites",
      gift_cards: "Gift Cards",
      return_requests: "Return requests",
      basket: "Shopping Cart",
    },
    user_menu: {
      my_shops: "My Stores",
      go_to_admin: "Manage {shop_name}",
      exit_from: "Logout {shop_name}",
      chips: "{chips} Chips",
    },
    login_to_shop: "Login to Store",
    login_to_shop_short: "login",
    item_in_basket_message: "{count} This item is in your cart.",
    search_title: "Search in store {shop_name}",
  },

  /** {@see BasketTopMenu} **/
  basket_top_menu: {
    basket: "Cart",
    basket_is_empty: "Your cart is empty.",
    total_price: "Total",
    view_basket: "View Cart",
    more: "More ...",
    accept_and_pay: "Checkout",
    items: "item(s)",
  },



  /** {@see HistoryOrdersPhysical} **/
  history_orders_physical: {
    rejected: "Rejected",
    table: {
      code: "Order Code",
      reserved: "Date",
      delivery_state: "Delivery status",
      price: "Total price",
      status: "Payment Status",
    },
  },
  /** {@see OrdersHistoryListTemplate} **/
  history_orders: {
    table: {
      code: "Order Code",
      items: "Items",
      reserved: "Date",
      delivery_state: "Latest status",
      price: "Total price",
      status: "Payment Status",
    },
  },

  /** {@see UserPagesLayout} **/
  user_page: {
    menu: {
      gift_card: "Gift Card",
      comments: "Comments",
      favorites: "Favorites",
      return_requests: "Returns",
      addresses: "Addresses",
      profile: "profile",
      orders: "Orders",
    },
  },
  /** {@see MyPhysicalOrderInfoPage} **/
  physical_order_page: {
    title: "Order",

    /** {@see CustomerOrderPaymentWidget} **/
    payment: {
      title: "Payment",
      payment_waiting: "Waiting for payment",
      payment_completed: "Paid",
      table: {
        title: "Title",
        amount: "Amount",
        description: "Description",
      },
      total_payment: "Amount paid",
      discount: "Discount",
      discount_code: "Discount code",
      delivery_fee: "Shipping cost",
      delivery_fee_after: "No delivery payed",

      total_price: "Total Price of Items",
      total_items_discount: "Items discount",
      total_price_after_offers: "Total Price after apply offers",

      buyer_payment: "Buyer Payment Amount",
    },
    /** {@see CustomerOrderDeliveryWidget} **/
    delivery: {
      title: "Delivery",
      subtitle: "Receipt Order Order Specifications",
      confirm_received_action: "Confirm Product Receipt",
      confirm_received_info:
        "Click the confirmation button if you received the order. If needed, you will be able to submit a referral if you receive confirmation. ",
      receiver: "Receiver",
      bill: "Invoice",
      name: "Name",
      tel: "Phone",
      email: "Email",
      country: "Country",
      state: "State",
      city: "City",
      address: "Address",
      building_no: "Building number",
      unit_no: "Unit number",
      postal_code: "Postcode",
      description: "Description",
      order_delivered: "Order has been delivered.",
      delivery_time: "Delivery Time",
      tracking_code: "Tracking code",
      tracking_url: "Tracking Url",

      notifications: {
        confirm_delivery: "Your order has been approved.",
      },
    },
    /** {@see BasketItemsListView} **/
    basket_items: {
      original_warranty: "Guarantee of originality of goods",
      return: "Return",
      table: {
        product: "Product Name",
        count: "Count",
        unit_price: "Unit price",
        total_price: "Total Price",
        discount: "Discount",
        final_price: "Final Price",
        returned: "Returned",
      },
    },
  },

  /** {@see BasketItemReturnForm} **/
  return_request: {
    title: "Return",
    count_input: "Number of returned items",
    count_input_message: "How many do you return?",
    reason_input: "Reason for return",
    reason_input_message: "Select the reason for returning this item.",
    note_input: "Description",
    note_input_hint: "Describe the reason for the reference ..",
    note_input_message:
      "Describe the reason for referring this item if needed.",
    media_message:
      "You can upload image, audio or video of the product here to get better support for product status information. Selecting the file will automatically send and confirm. ",
    video: "Video",
    voice: "Voice",
    add_action: "Send return request",
    notifications: "Your referral request has been successfully registered.",
  },
  /** {@see MyVirtualOrderInfoPage} **/
  virtual_order_page: {
    title: "Order",
    info: {
      title: "Purchased Virtual Product",
    },
  },

  /** {@see UserProfilePage} **/
  user_profile: {
    title: "My Personal Information",
    name: "Name",
    email: "Email",
    tel: "Tel",
    identity: "Authentication",
    success_kyc: "Approved KYC",
    club: "User Level",
    subscription: "News subscription",
    leave_shop: "Leave this store and remove all customers level",
    leave_shop_action: "Leave shop",
    leave_dialog: {
      title: "Leave shop",
      message:
        "Unsubscribing to this store will not delete your order information and records.",
      action: "Leave",
    },
    notifications: {
      leave_success: "Leave shop",
    },
    club_table: {
      discount: "Discount",
      limit: "Limit",
      currency: "Currency",
      free_shipping: "Free Shipping",
    },
  },
  /** {@see BasketPage} **/
  basket_page: {
    title: "Shopping Cart",
    total_price: "Total amount",
    shipping: "Shipping cost",
    free_shipping: "Free Shipping",
    shipping_not_pay: "Not included",
    total_discount: "Total discount",
    customer_club: "Client Club Member",
    customer_club_discount: "Member Discount",
    final_price: "Final Payment",
    lead_time: "Preparation time",
    lead_time_unit: "hour",
    receive_time: "Time to receive",
    select_time: "Select Delivery Time",
    no_select_time: "Send whenever ready.",
    transportation_type: "type of vehicle",
    days_input: "Delivery days",
    days_input_label: "Days",
    days_input_no_data: "Select at least one day",
    time_input: "Delivery time",
    time_input_label: "Delivery at",
    time_input_label_no_data: "Select at least one time interval",
    support_cod: "Cash on Delivery",
    not_support_cod: "Unable to pay locally!",
    final_confirm_action: "Final order confirmation",
    pay_and_complete_action: "Pay Now",
    pre_confirm_service: "Submit request",

    errors: {
      no_address: "Select the address you want your order to be shipped to.",
      no_phone: "Enter a contact number to coordinate the receipt of goods.",
      select_billing_country: "Select your billing country",
      select_billing_state: "Select your tax region",
    },
    same_billing_address: "Billing info same as receiver info",
    custom_billing_info: "Different billing info",
    basket_empty: "Basket is empty",
    extra_shipping_count: "You will receive {count} packages.",
    select_location_error:
      "Find the place of receipt of the shipment on the map and click on the indicator in the middle of the map to determine the exact address of the recipient.",
  },
  /** {@see BasketListItems} **/
  basket_items: {
    items_unit: "x",
    lead_unit: "hour",
    count_input: "Count",

    price_changed: "Price has changed. new price:",
    offer: "Get {count}x item by {percent}% off",
    offer_free: "Get {count}x free",
  },

  /** {@see UserAddressesPage} **/
  addresses_page: {
    title: "My Addresses",
    new_action: "New address",
    receiver: "Receiver",
    address: "Address",
    building_no: "license plate",
    building_unit: "unit",
    postcode: "Postcode",
    tel: "Tel",
    description: "Note",

    map: {
      title: "My Addresses",
      confirm: "Address registration",
      address_type: "Address",
      receptor_type: "Receiver",
    },
    add_dialog: {
      title: "New Address Name",
      message: "Enter a title for a new address.",
      address_name_input: "Address (required)",
    },
  },
  /** {@see UserReturnRequests} **/
  return_requests: {
    title: "Return requests",
  },
  /** {@see UserFavoritesPage} **/
  user_favorites: {
    title: "Wishlist",
  },
  /** {@see UserCommentsPage} **/
  user_comments: {
    title: "My Comments",
    first_post: "First post",
    last_edit: "Last edit",
  },
  /** {@see UserGiftCardsPage} **/
  user_gift_cards: {
    title: "My Gift Cards",
    add_action: "Add card",
    add_card_dialog: {
      title: "Add Gift Card",
      message:
        "Enter the card number and security code. A gift card will be added to your account.",
      card_number_input: "card number",
      info: "Note: When shopping from the store, payment options will be displayed with gift cards. Selecting this option will reduce the amount of your recharge charge. ",
      add_action: "Card Registration",
    },
  },

  /** {@see ProductComparison} **/
  product_comparison: {
    title: "Product Compare",
    action_button: "compare",

    /** {@see ProductComparisonList} **/
    list: {
      no_data: "No products added to comparison list.",
      price: "Price",
      type: "Type",
      brand: "Brand",
      warranty: "Warranty",
      variants_comparison: "Compare product diversity",
      spec: "Technical Specifications",
      pros: "Pros",
      cons: "Cons",
      user_review: "User comments",
      rating: "Rating",
      rating_count: "Number of reviews",
      info: "You can share this product comparison table with your friends by sending the following link to your friends or by accessing this list later by saving this link.",
      copy_action: "Copy Link Comparison",
      check_list: ["Yes", "Has"],
      cross_list: ["No", "Hasn't"],
    },
  },
  /** {@see ProductFilterMenu} **/
  product_filter_menu: {
    only_original: "Only originals",
    only_has_discount: "Only discounted",
    price_range: "Price range",
    brands: "Brand",
    main_shop_page: "Store main page",
    home: "Home",
  },

  /** {@see ProductRatingView} **/
  product_rating_view: {
    message:
      "Dear {user}, You have purchased this product. What do you think about this product?",
    notification: {
      title: "Congratulation",
      message: "Your comment has been recorded.",
    },
  },

  /** @see ShopBlogsPage **/
  blogs: {
    title: "Blog",
    add_new_blog: "New Blog",
    popular: "Popular",
    topics: "Topics",
    suggestions: "Suggestions",
  },

  /** @see ShopProfilePage **/
  official_pages: {
    about_us: "About us",
    terms: "Terms of use",
    privacy: "Privacy policy",
    contact_us: "Contact us",
  },

  /** @see ShopContactUs **/
  contact_us_form: {
    title: "Put your message in our box",
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    notifications: {
      success: "Your message has been sent.",
    },
  },

  /** @see MasterPaymentDialog **/
  master_payment: {
    notifications: {
      payment_success_title: "Pay Confirmation",
      payment_success: "Payment completed.",
      buy_title: "Buy",
      pay_by_giftcards: "Your order was paid with a gift card.",
      free_order: "Your order is free.",
      pay_by_cod: "Your order has been added as cash on delivery.",
      pay_by_dir:
        "Your order has been added successfully. Now you can pay by direct money transfer and then upload the payment receipt on order page.",
      pay_title: "Payment",
      qr_code_payment: "Payment QR code address created.",
      connecting_to_online_gateway: "Connecting to online payment gateway.",
    },
  },

  /** {@see TimeProgressBar} **/
  time_progress_bar: {
    title_before_start: "Remaining to begin",
    title_between_start_end: "Remaining to the end",
    title_after_end: "Finished",
    title_no_start_end: "Without time span!",
  },
  /** {@see LotteryPrizes} **/
  lottery_prizes: {
    message: "You can receive one gift at each order.",
  },

  /** {@see Coupons} **/
  coupons: {
    coupon_code: "Coupon code",
    add_coupon: "Add coupon",
  },

  /** {@see AvocadoCustomerAddOrderForm} **/
  /** {@see AvocadoItemsList} **/
  /** {@see AvocadoMyOrdersList} **/
  /** {@see AvocadoBuyerFormPage} **/
  /** {@see AvocadoOrderPage} **/

  avocado: {
    not_enable: "Avocado form not enable!",
    last_update: "Last update:",
    step1:
      "1. Enter the name and details of the product you want to order and click the Add button.",
    title_plc: "Enter the name of the product.",
    description_plc: "Do you have more product descriptions?",
    link_plc: "Do you have a link to the product?",
    image: "Product Image",
    image_msg: "You can send the product image if needed.",
    add_item: "Add item",
    items_list: "List of requested products",
    currency_msg: "You must pay the amount of this order with this currency.",
    step2:
      "2. After adding all the desired items, click on the order review request button. At this stage, the order will be reviewed and priced by us. By clicking on this link, you will be able to see the price and payment link.",
    order_action: "Order registration",
    show_all: "Show All",
    show_accepted: "Show Verified Items",
    last_orders: "List of your latest orders",
    pending_status: "under review",
    check_now: "Check order",
    add_new_order: "Register New Order",
    pay_online: "pay online",
    pricing_not_completed_message:
      "Your order is being reviewed. Your order will be reviewed and priced soon and you will be able to pay for it.",

    delete_item_dialog: {
      title: "Remove item from shopping cart",
      message: "Do you want to delete this item from the cart?",
      action: "Yes, delete",
    },

    notifications: {
      order_success: "Your order was successfully registered.",
      delete_success: "Item deleted.",
    },
  },

  /** {@see HyperAddOrderForm} **/
  hyper: {
    title: "Order Registration",
    message:
      "Register the list of products you want to buy by scanning the product code.",

    currency_msg: "The currency you intend to pay with.",
    order_action: "Payment",
    add_new_order: "New order",
    continue_order: "Continue order",
  },

  /** {@see RowCustomerPendingPayment} **/
  pending_payment: {
    upload_payment_receipt: "Upload image of the payment receipt.",
    upload_payment_receipt_done:
      "✔ You have already uploaded the receipt image, wait for our approval. If you need to change, you can replace the previous image with a new one.",
    public_form_title: "Account information for money transfer",
  },
};