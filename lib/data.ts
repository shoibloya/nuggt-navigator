// lib/data.ts
export type Row = {
  id: string;
  name: string;
  url: string;
  additionalInfo?: string; // “Remark (notable/unique things)” block; shown as bullets.
  // Optional: precomputed feature slugs. If omitted, they are derived from optionNotes via the rule.
  features?: Record<string, string[]>;
  // NEW: exact notes, word-for-word, keyed by category -> array of {slug, note}
  optionNotes?: Record<
    string,
    { slug: string; note: string }[]
  >;
};

// ----- EXAMPLE VENDOR (Mindbody) -----
// Notes are exactly as provided. You can paste others in the same format.
export const ROWS: Row[] = [
  {
    id: "mindbody",
    name: "Mindbody",
    url: "https://www.mindbodyonline.com/",
    additionalInfo: [
      "Mindbody Payments is powered by Stripe and supports Apple Pay, Google Pay, Klarna (BNPL), and regional APMs like iDEAL, Bancontact, and TWINT where available; also supports ACH/SEPA/PAD Direct Debit for autopays in certain regions. (support.mindbodyonline.com)",
      "Tap to Pay on iPhone and Android is available—no card reader required. (support.mindbodyonline.com)",
      "Virtual Wellness Platform provides built-in livestream and on-demand video options (native + Zoom integration), centralizing virtual services. (support.mindbodyonline.com)",
      "FitMetrix performance tracking adds live leaderboards and class challenges—handy for performance gyms/cycling studios. (support.mindbodyonline.com)",
      "Messenger / Messenger[ai] adds two-way SMS + chatbot with Google Analytics attribution options. (support.mindbodyonline.com)",
      "Lead Management connects directly to Facebook and Google Ads lead forms so ad leads flow into the pipeline automatically. (support.mindbodyonline.com)",
      "Reserve with Google and Facebook/Instagram “Book Now” give strong marketplace/channel distribution. (support.mindbodyonline.com)",
      "Family & corporate account tools (book/manage for dependents; company credit workflows) are built in. (support.mindbodyonline.com)",
    ].join("\n"),
    optionNotes: {
      "booking-channels": [
        { slug: "website-widget", note: "Website widget (Branded Web Tools/widgets for classes, appointments, etc.). (support.mindbodyonline.com)" },
        { slug: "branded-microsite", note: "Branded microsite (Mindbody consumer/online store pages & branded web tools pages). (support.mindbodyonline.com)" },
        { slug: "ios-app", note: "iOS app (Mindbody consumer app) + Branded iOS app (add-on). (support.mindbodyonline.com)" },
        { slug: "android-app", note: "Android app (Mindbody consumer app). (support.mindbodyonline.com)" },
        { slug: "facebook-instagram-booking", note: "Facebook/Instagram booking (Meta “Book Now”/Facebook booking integration). (support.mindbodyonline.com)" },
        { slug: "google-reserve", note: "Google Reserve (Reserve with Google integration). (support.mindbodyonline.com)" },
        { slug: "phone-in-person-entry", note: "Phone / in-person entry (Business app & POS for walk-ins/walk-ups). (support.mindbodyonline.com)" },
        { slug: "kiosk-self-service", note: "Kiosk / self-service (Mindbody Class Check-in iPad app)." },
        { slug: "embedded-iframe", note: "Embedded iframe — can’t find information (widgets embed via provided code, not explicitly via iframe). (support.mindbodyonline.com)" },
        { slug: "custom-portal-via-api", note: "Custom portal via API (Public API + Booker API). (support.mindbodyonline.com)" },
      ],
      "class-types": [
        { slug: "drop-in-single-session", note: "Drop-in / single session (pricing option types include single session). (support.mindbodyonline.com)" },
        { slug: "course-multi-session-series", note: "Course / multi-session series (Enrollments/courses). (support.mindbodyonline.com)" },
        { slug: "workshops-events", note: "Workshops / events (set up as enrollments). (support.mindbodyonline.com)" },
        { slug: "private-1-1", note: "Private 1:1 (Appointments/private sessions). (support.mindbodyonline.com)" },
        { slug: "semi-private-small-group", note: "Semi-private / small group — can’t find information (not explicitly documented as a separate type)" },
        { slug: "virtual-live-video", note: "Virtual live (video) (Virtual Wellness Platform for livestream). (support.mindbodyonline.com)" },
        { slug: "on-demand-recorded-content", note: "On-demand / recorded content (Virtual Wellness Platform for video-on-demand)." },
      ],
      "recurrence": [
        { slug: "recurring-classes", note: "Recurring classes (standard class schedules). (support.mindbodyonline.com)" },
        { slug: "rolling-enrollments", note: "Rolling enrollments — can’t find information" },
        { slug: "fixed-date-courses", note: "Fixed-date courses (enrollments with defined dates). (support.mindbodyonline.com)" },
        { slug: "waitlist-for-courses", note: "Waitlist for courses (enrollment/class waitlists). (support.mindbodyonline.com)" },
      ],
      "capacity-and-time-controls": [
        { slug: "capacity-limit", note: "Capacity limit (set class capacity). (support.mindbodyonline.com)" },
        { slug: "equipment-based-capacity", note: "Equipment-based capacity (resource-based capacity for appointments; classes not clearly stated). (support.mindbodyonline.com)" },
        { slug: "overbooking-allowance", note: "Overbooking allowance — can’t find information" },
        { slug: "waitlist", note: "Waitlist (classes/enrollments). (support.mindbodyonline.com)" },
        { slug: "auto-promotion-from-waitlist", note: "Auto-promotion from waitlist. (support.mindbodyonline.com)" },
        { slug: "booking-window-open-close", note: "Booking window (open/close) (advance booking/cancellation windows). (support.mindbodyonline.com)" },
        { slug: "cut-off-time-before-start", note: "Cut-off time before start (same-day/within X hours booking setting). (support.mindbodyonline.com)" },
        { slug: "late-cancel-rules", note: "Late cancel rules (cancellation policies). (support.mindbodyonline.com)" },
        { slug: "no-show-fee", note: "No-show fee — can’t find information" },
        { slug: "grace-periods", note: "Grace periods — can’t find information" },
        { slug: "buffer-times-between-classes", note: "Buffer times between classes — can’t find information" },
      ],
      "resource-allocation": [
        { slug: "rooms-locations", note: "Rooms / locations (assign rooms/locations to services). (support.mindbodyonline.com)" },
        { slug: "equipment", note: "Equipment (resources like equipment for appointments). (support.mindbodyonline.com)" },
        { slug: "instructors", note: "Instructors (assign staff/instructors). (support.mindbodyonline.com)" },
        { slug: "multiple-resources-per-booking", note: "Multiple resources per booking — can’t find information" },
        { slug: "conflict-detection-prevention", note: "Conflict detection / prevention (double-booking detection). (support.mindbodyonline.com)" },
      ],
      "calendar-sync": [
        { slug: "google-calendar-2-way", note: "Google Calendar (2-way) — can’t find information" },
        { slug: "outlook-2-way", note: "Outlook (2-way) — can’t find information" },
        { slug: "icloud-2-way", note: "iCloud (2-way) — can’t find information" },
        { slug: "ics-feed-1-way", note: "ICS feed (1-way) (subscribe to Mindbody calendar)." },
      ],
      "check-in-and-access": [
        { slug: "staff-check-in", note: "Staff check-in (check-in from business app/schedule). (support.mindbodyonline.com)" },
        { slug: "mobile-app-check-in", note: "Mobile app check-in (Business app workflow). (support.mindbodyonline.com)" },
        { slug: "kiosk-ipad-check-in", note: "Kiosk / iPad check-in (Mindbody Class Check-in)." },
        { slug: "qr-code-barcode-scanning", note: "QR code / barcode scanning (barcode scanners supported; QR not documented). (support.mindbodyonline.com)" },
        { slug: "nfc-rfid", note: "NFC / RFID — can’t find information" },
        { slug: "turnstile-door-access-integration", note: "Turnstile / door access integration — can’t find information" },
      ],
      "forms-and-waivers": [
        { slug: "custom-intake-forms", note: "Custom intake forms (Client Forms). (support.mindbodyonline.com)" },
        { slug: "conditional-logic", note: "Conditional logic — can’t find information" },
        { slug: "e-sign-waivers", note: "E-sign waivers — can’t find information" },
        { slug: "health-screening", note: "Health screening — can’t find information" },
        { slug: "parental-consent", note: "Parental consent — can’t find information" },
        { slug: "photo-video-consent", note: "Photo/video consent — can’t find information" },
        { slug: "per-class-forms", note: "Per-class forms — can’t find information" },
        { slug: "custom-fields", note: "Custom fields (required fields & custom collection via forms/widgets). (support.mindbodyonline.com)" },
      ],
      "booking-models": [
        { slug: "guest-checkout", note: "Guest checkout — can’t find information (Mindbody account required for clients) (support.mindbodyonline.com)" },
        { slug: "account-required", note: "Account required (Mindbody account SSO across businesses). (support.mindbodyonline.com)" },
        { slug: "family-group-bookings", note: "Family / group bookings (parents booking for children; family accounts). (support.mindbodyonline.com)" },
        { slug: "corporate-team-bookings", note: "Corporate / team bookings (company profiles & corporate account credit workflows). (support.mindbodyonline.com)" },
        { slug: "multi-attendee-in-one-booking", note: "Multi-attendee in one booking (book multiple clients in one transaction). (support.mindbodyonline.com)" },
        { slug: "add-on-upsells-at-checkout", note: "Add-on upsells at checkout — can’t find information" },
      ],
      "notifications": [
        { slug: "email-reminders", note: "Email reminders (auto emails). (support.mindbodyonline.com)" },
        { slug: "sms-reminders", note: "SMS reminders (1-way & 2-way SMS options). (support.mindbodyonline.com)" },
        { slug: "push-notifications", note: "Push notifications (branded app push). (support.mindbodyonline.com)" },
        { slug: "whatsapp-notifications", note: "WhatsApp notifications — can’t find information" },
        { slug: "two-way-sms", note: "Two-way SMS (Messenger/Messenger[ai]). (support.mindbodyonline.com)" },
        { slug: "custom-templates", note: "Custom templates (SMTP/custom email content & replace phrases). (support.mindbodyonline.com)" },
        { slug: "automated-waitlist-messages", note: "Automated waitlist messages (waitlist automation includes notifications). (support.mindbodyonline.com)" },
      ],
      "payment-gateways": [
        { slug: "stripe", note: "Stripe (via Mindbody Payments, powered by Stripe). (support.mindbodyonline.com)" },
        // Following gateways explicitly “can’t find information” in your notes:
        { slug: "paypal", note: "PayPal — can’t find information" },
        { slug: "square", note: "Square — can’t find information" },
        { slug: "adyen", note: "Adyen — can’t find information" },
        { slug: "braintree", note: "Braintree — can’t find information" },
        { slug: "authorize-net", note: "Authorize.Net — can’t find information" },
        { slug: "worldpay", note: "Worldpay — can’t find information" },
        { slug: "mollie", note: "Mollie — can’t find information" },
        { slug: "razorpay", note: "Razorpay — can’t find information" },
        { slug: "paystack", note: "Paystack — can’t find information" },
        { slug: "payu", note: "PayU — can’t find information" },
        { slug: "mercado-pago", note: "Mercado Pago — can’t find information" },
        { slug: "2checkout", note: "2Checkout — can’t find information" },
        { slug: "checkout-com", note: "Checkout.com — can’t find information" },
        { slug: "klarna-payments", note: "Klarna Payments (as gateway) — can’t find information" },
        // TSYS / Paysafe noted as legacy:
        { slug: "klarna-payments", note: "Klarna appears as a payment method through Mindbody Payments in some regions, not as a separate gateway. (support.mindbodyonline.com)" },
      ],
      "payment-methods": [
        { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Credit/Debit cards (Visa/Mastercard/Amex/Discover). (support.mindbodyonline.com)" },
        { slug: "apple-pay", note: "Apple Pay (online & mobile checkout). (support.mindbodyonline.com)" },
        { slug: "google-pay", note: "Google Pay (online checkout). (support.mindbodyonline.com)" },
        { slug: "buy-now-pay-later-afterpay-clearpay-klarna-affirm", note: "Buy Now Pay Later (Klarna; regions where supported). (support.mindbodyonline.com)" },
        { slug: "bank-transfer", note: "Bank transfer — can’t find information" },
        { slug: "sepa-direct-debit", note: "SEPA Direct Debit (autopays where available). (support.mindbodyonline.com)" },
        { slug: "ach-debit", note: "ACH Debit (contracts/autopays where available). (support.mindbodyonline.com)" },
        { slug: "ideal", note: "iDEAL (regional APM). (support.mindbodyonline.com)" },
        { slug: "bancontact", note: "Bancontact (regional APM). (support.mindbodyonline.com)" },
        { slug: "eps", note: "EPS / giropay / Przelewy24 / PIX / Boleto / PayNow (SG) / GrabPay / Alipay / WeChat Pay — can’t find information" },
        { slug: "giropay", note: "EPS / giropay / Przelewy24 / PIX / Boleto / PayNow (SG) / GrabPay / Alipay / WeChat Pay — can’t find information" },
        { slug: "przelewy24", note: "EPS / giropay / Przelewy24 / PIX / Boleto / PayNow (SG) / GrabPay / Alipay / WeChat Pay — can’t find information" },
        { slug: "pix", note: "EPS / giropay / Przelewy24 / PIX / Boleto / PayNow (SG) / GrabPay / Alipay / WeChat Pay — can’t find information" },
        { slug: "boleto", note: "EPS / giropay / Przelewy24 / PIX / Boleto / PayNow (SG) / GrabPay / Alipay / WeChat Pay — can’t find information" },
        { slug: "paynow-sg", note: "EPS / giropay / Przelewy24 / PIX / Boleto / PayNow (SG) / GrabPay / Alipay / WeChat Pay — can’t find information" },
        { slug: "grabpay", note: "EPS / giropay / Przelewy24 / PIX / Boleto / PayNow (SG) / GrabPay / Alipay / WeChat Pay — can’t find information" },
        { slug: "alipay", note: "EPS / giropay / Przelewy24 / PIX / Boleto / PayNow (SG) / GrabPay / Alipay / WeChat Pay — can’t find information" },
        { slug: "wechat-pay", note: "EPS / giropay / Przelewy24 / PIX / Boleto / PayNow (SG) / GrabPay / Alipay / WeChat Pay — can’t find information" },
        { slug: "cash", note: "Cash. (support.mindbodyonline.com)" },
        { slug: "cheque", note: "Cheque/Check. (support.mindbodyonline.com)" },
      ],
      "point-of-sale-in-person": [
        { slug: "card-reader", note: "Card reader (BBPOS/WisePOS E, etc.). (support.mindbodyonline.com)" },
        { slug: "tap-to-pay-on-iphone-android", note: "Tap to Pay on iPhone/Android (no reader required). (support.mindbodyonline.com)" },
        { slug: "cash-drawer", note: "Cash drawer. (support.mindbodyonline.com)" },
        { slug: "receipt-printer", note: "Receipt printer. (support.mindbodyonline.com)" },
        { slug: "barcode-scanner", note: "Barcode scanner. (support.mindbodyonline.com)" },
      ],
      "pricing-models": [
        { slug: "single-class", note: "Single class / Class packs / punch cards / Memberships / subscriptions. (support.mindbodyonline.com)" },
        { slug: "intro-offers", note: "Intro offers. (support.mindbodyonline.com)" },
        { slug: "free-trials", note: "Free trials — can’t find information" },
        { slug: "tiered-pricing", note: "Tiered pricing (price breaks for appointments). (support.mindbodyonline.com)" },
        { slug: "pay-what-you-want", note: "Pay-what-you-want — can’t find information" },
        { slug: "sliding-scale", note: "Sliding scale — can’t find information" },
        { slug: "corporate-rates", note: "Corporate rates — can’t find information" },
        { slug: "student-senior-rates", note: "Student/Senior rates (via Client Types & targeted pricing). (support.mindbodyonline.com)" },
      ],
      "billing-and-collections": [
        { slug: "recurring-billing", note: "Recurring billing (contracts/autopays). (support.mindbodyonline.com)" },
        { slug: "proration", note: "Proration (pro-rate contracts). (support.mindbodyonline.com)" },
        { slug: "dunning-retry-logic", note: "Dunning / retry logic — can’t find information" },
        { slug: "partial-payments", note: "Partial payments (split payments, partial order payments). (support.mindbodyonline.com)" },
        { slug: "deposits", note: "Deposits. (support.mindbodyonline.com)" },
        { slug: "split-payments", note: "Split payments (multi-tender supported). (support.mindbodyonline.com)" },
        { slug: "installments", note: "Installments (scheduled autopays/contract schedules). (support.mindbodyonline.com)" },
      ],
      "taxes-and-invoicing": [
        { slug: "vat-gst-hst", note: "VAT/GST/HST & Tax inclusive/exclusive. (support.mindbodyonline.com)" },
        { slug: "multiple-tax-rates", note: "Multiple tax rates. (support.mindbodyonline.com)" },
        { slug: "tax-inclusive-exclusive", note: "Tax inclusive/exclusive. (support.mindbodyonline.com)" },
        { slug: "automatic-tax-calculation", note: "Automatic tax calculation (configured rates calculated; tax analysis tool). (support.mindbodyonline.com)" },
        { slug: "fiscal-receipts", note: "Fiscal receipts — can’t find information" },
        { slug: "quotes", note: "Quotes (Open Ticket Quotes). (support.mindbodyonline.com)" },
        { slug: "invoices", note: "Invoices (send & report on invoices). (support.mindbodyonline.com)" },
        { slug: "credit-notes", note: "Credit notes — can’t find information (account credit available). (support.mindbodyonline.com)" },
        { slug: "purchase-orders", note: "Purchase orders (inventory POs & management). (support.mindbodyonline.com)" },
      ],
      "discounts-and-credits": [
        { slug: "coupon-codes", note: "Coupon codes / Promo codes. (support.mindbodyonline.com)" },
        { slug: "auto-discounts", note: "Auto-discounts (Early Bird). (support.mindbodyonline.com)" },
        { slug: "volume-discounts", note: "Volume discounts — can’t find information" },
        { slug: "referral-discounts", note: "Referral discounts (Marketing Suite referral program). (support.mindbodyonline.com)" },
        { slug: "loyalty-points-redemption", note: "Loyalty points redemption (Client Rewards program). (support.mindbodyonline.com)" },
        { slug: "gift-cards", note: "Gift cards. (support.mindbodyonline.com)" },
        { slug: "store-credit", note: "Store credit (account payments/credit). (support.mindbodyonline.com)" },
      ],
      "risk-and-compliance": [
        { slug: "3-d-secure-sca", note: "3-D Secure / SCA (supported via Mindbody Payments). (support.mindbodyonline.com)" },
        { slug: "pci-dss-compliance", note: "PCI DSS compliance (Mindbody = PCI Level 1 Service Provider). (support.mindbodyonline.com)" },
        { slug: "avs-address-verification", note: "AVS / Address verification. (support.mindbodyonline.com)" },
        { slug: "chargeback-management", note: "Chargeback management (guidance & tools). (support.mindbodyonline.com)" },
        { slug: "risk-scoring-fraud-checks", note: "Risk scoring / fraud checks — can’t find information" },
      ],
      "currency": [
        { slug: "multi-currency-pricing", note: "Multi-currency pricing — can’t find information (you can set a site currency). (support.mindbodyonline.com)" },
        { slug: "fx-conversion-at-checkout", note: "FX conversion at checkout — can’t find information" },
        { slug: "settlement-currency-selection", note: "Settlement currency selection — can’t find information" },
      ],
      "profiles": [
        { slug: "family-accounts", note: "Family accounts. (support.mindbodyonline.com)" },
        { slug: "corporate-accounts", note: "Corporate accounts (company profile + corporate credit workflows). (support.mindbodyonline.com)" },
        { slug: "emergency-contacts", note: "Emergency contacts (fields & emails support). (support.mindbodyonline.com)" },
        { slug: "medical-notes", note: "Medical notes (SOAP Notes/Progress Notes). (support.mindbodyonline.com)" },
        { slug: "tags-segments", note: "Tags / segments (client tags & Marketing Suite segmentation). (support.mindbodyonline.com)" },
      ],
      "memberships": [
        { slug: "contract-terms", note: "Contract terms (setup & terms). (support.mindbodyonline.com)" },
        { slug: "freezes-holds", note: "Freezes / holds (suspensions/freezes). (support.mindbodyonline.com)" },
        { slug: "carryover-rules", note: "Carryover rules — can’t find information" },
        { slug: "cancellation-policies", note: "Cancellation policies (FTC Click-to-Cancel changes to online cancellation). (support.mindbodyonline.com)" },
        { slug: "usage-limits", note: "Usage limits (scheduling restrictions / daily limits). (support.mindbodyonline.com)" },
        { slug: "access-control-by-membership", note: "Access control by membership (restrict services to member types). (support.mindbodyonline.com)" },
      ],
      "passes": [
        { slug: "class-packs", note: "Class packs. (support.mindbodyonline.com)" },
        { slug: "expiration-rules", note: "Expiration rules (set per pricing option). (support.mindbodyonline.com)" },
        { slug: "shareable-passes", note: "Shareable passes — can’t find information" },
        { slug: "transfer-rules", note: "Transfer rules — can’t find information" },
      ],
      "loyalty-and-referral": [
        { slug: "points", note: "Points (Client Rewards). (support.mindbodyonline.com)" },
        { slug: "tiers", note: "Tiers — can’t find information" },
        { slug: "referrals", note: "Referrals (Marketing Suite referral program). (support.mindbodyonline.com)" },
        { slug: "rewards-catalog", note: "Rewards catalog — can’t find information" },
        { slug: "streaks-badges", note: "Streaks / badges — can’t find information" },
      ],
      "gift-cards": [
        { slug: "digital-gift-cards", note: "Digital gift cards (links in branded web tools + consumer site redemption). (support.mindbodyonline.com)" },
        { slug: "physical-gift-cards", note: "Physical gift cards (Booker gift certificates/cards). (support.mindbodyonline.com)" },
        { slug: "balance-management", note: "Balance management (gift card reports). (support.mindbodyonline.com)" },
        { slug: "scheduled-delivery", note: "Scheduled delivery — can’t find information" },
      ],
      "community": [
        { slug: "forums-groups", note: "Forums / groups — can’t find information" },
        { slug: "leaderboards", note: "Leaderboards (FitMetrix live leaderboards). (support.mindbodyonline.com)" },
        { slug: "challenges", note: "Challenges (FitMetrix class challenges). (support.mindbodyonline.com)" },
      ],
      "admin-and-permissions": [
        { slug: "role-based-permissions", note: "Role-based permissions (permission groups & granular staff permissions). (support.mindbodyonline.com)" },
        { slug: "field-level-permissions", note: "Field-level permissions — can’t find information (can limit staff to “their” clients) (support.mindbodyonline.com)" },
        { slug: "audit-logs", note: "Audit logs (Entry Logs; Staff Activity reports). (support.mindbodyonline.com)" },
      ],
      "scheduling-and-availability": [
        { slug: "staff-scheduling", note: "Staff scheduling (appointment schedule, non-service staff setup). (support.mindbodyonline.com)" },
        { slug: "availability-rules", note: "Availability rules (set appointment availability & breaks). (support.mindbodyonline.com)" },
        { slug: "time-off", note: "Time-off (mark unavailability/blocked time). (support.mindbodyonline.com)" },
        { slug: "shift-swaps", note: "Shift swaps — can’t find information" },
      ],
      "compensation": [
        { slug: "payroll-export", note: "Payroll export — can’t find information (payroll reports exist). (support.mindbodyonline.com)" },
        { slug: "commission-structures", note: "Commission structures — can’t find information" },
        { slug: "tips", note: "Tips. (support.mindbodyonline.com)" },
        { slug: "tip-pools", note: "Tip pools — can’t find information" },
        { slug: "performance-dashboards", note: "Performance dashboards (Business Insights app). (support.mindbodyonline.com)" },
      ],
      "crm-and-lead-management": [
        { slug: "contact-crm", note: "Contact CRM (client profiles & notes). (support.mindbodyonline.com)" },
        { slug: "lead-capture-forms", note: "Lead capture forms (Prospect widget, Web-to-Customer). (support.mindbodyonline.com)" },
        { slug: "lead-pipeline-stages", note: "Lead pipeline / stages (Lead Management pipeline). (support.mindbodyonline.com)" },
      ],
      "campaigns": [
        { slug: "email-marketing", note: "Email marketing (Marketing Suite/Attentive). (support.mindbodyonline.com)" },
        { slug: "sms-marketing", note: "SMS marketing. (support.mindbodyonline.com)" },
        { slug: "marketing-automation", note: "Marketing automation. (support.mindbodyonline.com)" },
        { slug: "abandoned-booking-recovery", note: "Abandoned booking recovery (campaigns can target opens without purchase/abandoned). (support.mindbodyonline.com)" },
        { slug: "promo-codes", note: "Promo codes (work across web tools/app). (support.mindbodyonline.com)" },
        { slug: "landing-pages", note: "Landing pages — can’t find information" },
        { slug: "seo-tools", note: "SEO tools (SEO guidance for branded web widgets). (support.mindbodyonline.com)" },
      ],
      "ads-and-tracking": [
        { slug: "facebook-ads-pixel", note: "Facebook Ads pixel (Meta Pixel) (supported in branded web tools). (support.mindbodyonline.com)" },
        { slug: "google-ads-conversion", note: "Google Ads conversion / Google Analytics (GA4) tracking for widgets/cart; post-booking thank-you URL. (support.mindbodyonline.com)" },
      ],
    },  
  }, {
  id: "glofox",
  name: "Glofox",
  url: "https://www.glofox.com/",
  additionalInfo: [
    "Spot Booking (beta): lets members pick a specific bike/row/spot—great for cycling/row studios. (support.glofox.com)",
    "Two-way SMS “Conversations”: a built-in inbox for real-time 2-way texting with members and leads. (support.glofox.com)",
    "Access control integrations: out-of-the-box connections with Kisi and Passport for door/turnstile access. (support.glofox.com)",
    "ACH Direct Debit: ACH via Stripe (in addition to GoCardless direct debit). (support.glofox.com)",
    "POS Terminal: integrated Stripe WisePOS-E terminal for in-person card payments. (support.glofox.com)",
    "Account Balance wallet: usable for purchases and even partial subscription payments when enabled. (support.glofox.com)",
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Website widget / Embedded iframe / Web portal (hosted microsite) — Glofox provides a Web Portal that you can embed, and you can also share direct booking links. (support.glofox.com)" },
      { slug: "embedded-iframe", note: "Website widget / Embedded iframe / Web portal (hosted microsite) — Glofox provides a Web Portal that you can embed, and you can also share direct booking links. (support.glofox.com)" },
      { slug: "branded-microsite", note: "Website widget / Embedded iframe / Web portal (hosted microsite) — Glofox provides a Web Portal that you can embed, and you can also share direct booking links. (support.glofox.com)" },
      { slug: "ios-app", note: "iOS app / Android app — Members can browse schedules, book and pay in the ABC Glofox mobile app (iOS/Android). (support.glofox.com)" },
      { slug: "android-app", note: "iOS app / Android app — Members can browse schedules, book and pay in the ABC Glofox mobile app (iOS/Android). (support.glofox.com)" },
      { slug: "phone-in-person-entry", note: "Phone / in-person entry — Staff can book people from the dashboard and at front desk. (support.glofox.com)" },
      { slug: "kiosk-self-service", note: "Kiosk / self-service — Glofox offers a self check-in kiosk (Boost/Elite tiers). (support.glofox.com)" },
      { slug: "facebook-instagram-booking", note: "Facebook/Instagram booking — can’t find information (Glofox does support sharing Web Portal links on social media, but that’s not native “book on Facebook/Instagram”). (support.glofox.com)" },
      { slug: "google-reserve", note: "Google Reserve — can’t find information" },
      { slug: "custom-portal-via-api", note: "Custom portal via API — can’t find information" },
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Drop-in / single session (classes) — Yes. (support.glofox.com)" },
      { slug: "course-multi-session-series", note: "Course / multi-session series — Courses are supported. (support.glofox.com)" },
      { slug: "workshops-events", note: "Workshops / events — “Events” are classes or courses on the schedule. (support.glofox.com)" },
      { slug: "private-1-1", note: "Private 1:1 (appointments) — Personal trainer appointments supported. (support.glofox.com)" },
      { slug: "semi-private-small-group", note: "Semi-private / small group — Via appointments/facilities; not explicitly branded as “semi-private,” but supported by appointments and capacity controls. (support.glofox.com)" },
      { slug: "virtual-live-video", note: "Virtual live (video) — can’t find information" },
      { slug: "on-demand-recorded-content", note: "On-demand / recorded content — can’t find information" },
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Recurring classes / appointments — Staff can create recurring appointments; classes are scheduled on recurring timetables. (support.glofox.com)" },
      { slug: "rolling-enrollments", note: "Rolling enrollments — can’t find information" },
      { slug: "fixed-date-courses", note: "Fixed-date courses — Supported. (support.glofox.com)" },
      { slug: "waitlist-for-courses", note: "Waitlist for courses — can’t find information (waitlists are documented for classes)." },
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Capacity limit — Standard for classes/courses. (glofox.com)" },
      { slug: "equipment-based-capacity", note: "Equipment-based capacity / spot selection — Spot Booking (beta) lets members reserve a specific bike/rower/spot. (support.glofox.com)" },
      { slug: "overbooking-allowance", note: "Overbooking allowance — can’t find information" },
      { slug: "waitlist", note: "Waitlist / Auto-promotion — Waitlists supported; auto-notify/auto-fill described. (support.glofox.com)" },
      { slug: "auto-promotion-from-waitlist", note: "Waitlist / Auto-promotion — Waitlists supported; auto-notify/auto-fill described. (support.glofox.com)" },
      { slug: "booking-window-open-close", note: "Booking window (open/close), Cut-off time — can’t find information" },
      { slug: "cut-off-time-before-start", note: "Booking window (open/close), Cut-off time — can’t find information" },
      { slug: "late-cancel-rules", note: "Late cancel rules / No-show fee — Cancellation rules are discussed; specific “no-show fee” can be handled via Custom Charges (manual). (glofox.com)" },
      { slug: "no-show-fee", note: "Late cancel rules / No-show fee — Cancellation rules are discussed; specific “no-show fee” can be handled via Custom Charges (manual). (glofox.com)" },
      { slug: "grace-periods", note: "Grace periods — can’t find information" },
      { slug: "buffer-times-between-classes", note: "Buffer times between classes — can’t find information" },
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Rooms/locations (Facilities) — Facilities/resources are supported. (support.glofox.com)" },
      { slug: "equipment", note: "Equipment — Via Spot Booking (assigns specific equipment/spot). (support.glofox.com)" },
      { slug: "instructors", note: "Instructors — Trainer assignment/availability supported. (support.glofox.com)" },
      { slug: "multiple-resources-per-booking", note: "Multiple resources per booking — can’t find information" },
      { slug: "conflict-detection-prevention", note: "Conflict detection / prevention — can’t find information" },
    ],
    "calendar-sync": [
      { slug: "google-calendar-2-way", note: "Google (2-way) / Outlook (2-way) / iCloud (2-way) / ICS feed (1-way) — can’t find information (member app offers native schedule + device “add to calendar” behavior noted in app platforms, but no official 2-way sync docs found). (Google Play)" },
      { slug: "outlook-2-way", note: "Google (2-way) / Outlook (2-way) / iCloud (2-way) / ICS feed (1-way) — can’t find information (member app offers native schedule + device “add to calendar” behavior noted in app platforms, but no official 2-way sync docs found). (Google Play)" },
      { slug: "icloud-2-way", note: "Google (2-way) / Outlook (2-way) / iCloud (2-way) / ICS feed (1-way) — can’t find information (member app offers native schedule + device “add to calendar” behavior noted in app platforms, but no official 2-way sync docs found). (Google Play)" },
      { slug: "ics-feed-1-way", note: "Google (2-way) / Outlook (2-way) / iCloud (2-way) / ICS feed (1-way) — can’t find information (member app offers native schedule + device “add to calendar” behavior noted in app platforms, but no official 2-way sync docs found). (Google Play)" },
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Staff check-in — Yes (dashboard & scanner). (support.glofox.com)" },
      { slug: "mobile-app-check-in", note: "Mobile app check-in — Members present an in-app barcode for scanning. (support.glofox.com)" },
      { slug: "kiosk-ipad-check-in", note: "Kiosk / iPad check-in — Yes (self-service kiosk). (support.glofox.com)" },
      { slug: "qr-code-barcode-scanning", note: "QR code / barcode scanning — Barcode scanning supported (Honeywell scanner setup). (support.glofox.com)" },
      { slug: "nfc-rfid", note: "NFC / RFID — can’t find information" },
      { slug: "turnstile-door-access-integration", note: "Turnstile / door access integration — Kisi and Passport access-control integrations. (support.glofox.com)" },
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "Custom intake forms / Custom fields — Forms settings allow custom questions and terms. (support.glofox.com)" },
      { slug: "custom-fields", note: "Custom intake forms / Custom fields — Forms settings allow custom questions and terms. (support.glofox.com)" },
      { slug: "e-sign-waivers", note: "E-sign waivers / agreements — E-Agreements support across Dashboard/Member App/Web. (support.glofox.com)" },
      { slug: "conditional-logic", note: "Conditional logic — can’t find information" },
      { slug: "health-screening", note: "Health screening — can’t find information" },
      { slug: "parental-consent", note: "Parental consent — Parental waiver supported when Family accounts are enabled. (support.glofox.com)" },
      { slug: "photo-video-consent", note: "Photo/video consent — can’t find information" },
      { slug: "per-class-forms", note: "Per-class forms — can’t find information" },
    ],
    "booking-models": [
      { slug: "guest-checkout", note: "Guest checkout — can’t find information (Web Portal requires login/sign-up at booking). (support.glofox.com)" },
      { slug: "account-required", note: "Account required — Yes (login/sign-up flow). (support.glofox.com)" },
      { slug: "family-group-bookings", note: "Family / group bookings — Family accounts + “Book a Friend” for courses. (support.glofox.com)" },
      { slug: "corporate-team-bookings", note: "Corporate / team bookings — can’t find information" },
      { slug: "multi-attendee-in-one-booking", note: "Multi-attendee in one booking — “Book a Friend” setting. (support.glofox.com)" },
      { slug: "add-on-upsells-at-checkout", note: "Add-on upsells at checkout — Add-on Services (beta) for bundling extras to memberships. (support.glofox.com)" },
    ],
    "notifications": [
      { slug: "email-reminders", note: "Email reminders — Automated booking reminders via email. (support.glofox.com)" },
      { slug: "sms-reminders", note: "SMS reminders — Automated SMS reminders. (support.glofox.com)" },
      { slug: "push-notifications", note: "Push notifications — Yes. (support.glofox.com)" },
      { slug: "whatsapp-notifications", note: "WhatsApp notifications — can’t find information" },
      { slug: "two-way-sms", note: "Two-way SMS — Two-way SMS + Conversations inbox. (support.glofox.com)" },
      { slug: "custom-templates", note: "Custom templates — Custom email templates & campaigns are supported. (support.glofox.com)" },
      { slug: "automated-waitlist-messages", note: "Automated waitlist messages — Waitlist notifications/auto-fill described. (glofox.com)" },
    ],
    "payment-gateways": [
      { slug: "stripe", note: "Stripe (Glofox Payments) — Native; built on Stripe Connect. (glofox.com)" },
      { slug: "paypal", note: "PayPal — can’t find information" },
      { slug: "square", note: "Square — can’t find information" },
      { slug: "adyen", note: "Adyen — can’t find information" },
      { slug: "braintree", note: "Braintree — can’t find information" },
      { slug: "authorize-net", note: "Authorize.Net — can’t find information" },
      { slug: "worldpay", note: "Worldpay — can’t find information" },
      { slug: "mollie", note: "Mollie — can’t find information" },
      { slug: "razorpay", note: "Razorpay — can’t find information" },
      { slug: "paystack", note: "Paystack — can’t find information" },
      { slug: "payu", note: "PayU — can’t find information" },
      { slug: "mercado-pago", note: "Mercado Pago — can’t find information" },
      { slug: "2checkout", note: "2Checkout — can’t find information" },
      { slug: "checkout-com", note: "Checkout.com — can’t find information" },
      { slug: "klarna-payments", note: "Klarna Payments — can’t find information" },
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Credit/Debit cards — Yes (Stripe). (support.glofox.com)" },
      { slug: "apple-pay", note: "Apple Pay / Google Pay — Announced/beta for product purchases. (support.glofox.com)" },
      { slug: "google-pay", note: "Apple Pay / Google Pay — Announced/beta for product purchases. (support.glofox.com)" },
      { slug: "buy-now-pay-later-afterpay-clearpay-klarna-affirm", note: "Buy Now Pay Later (Afterpay/Clearpay/Klarna/Affirm) — can’t find information" },
      { slug: "bank-transfer", note: "Bank transfer — Supported as a manual method (“Bank transfers”). (support.glofox.com)" },
      { slug: "sepa-direct-debit", note: "SEPA Direct Debit — Via GoCardless direct debit. (support.glofox.com)" },
      { slug: "ach-debit", note: "ACH Debit — Via Stripe ACH Direct Debit. (support.glofox.com)" },
      { slug: "ideal", note: "iDEAL / Bancontact / EPS / giropay / Przelewy24 / PIX / Boleto / PayNow (SG) / GrabPay / Alipay / WeChat Pay — can’t find information" },
      { slug: "bancontact", note: "iDEAL / Bancontact / EPS / giropay / Przelewy24 / PIX / Boleto / PayNow (SG) / GrabPay / Alipay / WeChat Pay — can’t find information" },
      { slug: "eps", note: "iDEAL / Bancontact / EPS / giropay / Przelewy24 / PIX / Boleto / PayNow (SG) / GrabPay / Alipay / WeChat Pay — can’t find information" },
      { slug: "giropay", note: "iDEAL / Bancontact / EPS / giropay / Przelewy24 / PIX / Boleto / PayNow (SG) / GrabPay / Alipay / WeChat Pay — can’t find information" },
      { slug: "przelewy24", note: "iDEAL / Bancontact / EPS / giropay / Przelewy24 / PIX / Boleto / PayNow (SG) / GrabPay / Alipay / WeChat Pay — can’t find information" },
      { slug: "pix", note: "iDEAL / Bancontact / EPS / giropay / Przelewy24 / PIX / Boleto / PayNow (SG) / GrabPay / Alipay / WeChat Pay — can’t find information" },
      { slug: "boleto", note: "iDEAL / Bancontact / EPS / giropay / Przelewy24 / PIX / Boleto / PayNow (SG) / GrabPay / Alipay / WeChat Pay — can’t find information" },
      { slug: "paynow-sg", note: "iDEAL / Bancontact / EPS / giropay / Przelewy24 / PIX / Boleto / PayNow (SG) / GrabPay / Alipay / WeChat Pay — can’t find information" },
      { slug: "grabpay", note: "iDEAL / Bancontact / EPS / giropay / Przelewy24 / PIX / Boleto / PayNow (SG) / GrabPay / Alipay / WeChat Pay — can’t find information" },
      { slug: "alipay", note: "iDEAL / Bancontact / EPS / giropay / Przelewy24 / PIX / Boleto / PayNow (SG) / GrabPay / Alipay / WeChat Pay — can’t find information" },
      { slug: "wechat-pay", note: "iDEAL / Bancontact / EPS / giropay / Przelewy24 / PIX / Boleto / PayNow (SG) / GrabPay / Alipay / WeChat Pay — can’t find information" },
      { slug: "cash", note: "Cash / Cheque — Cash supported; cheque can’t find information. (support.glofox.com)" },
      { slug: "cheque", note: "Cash / Cheque — Cash supported; cheque can’t find information. (support.glofox.com)" },
    ],
    "point-of-sale-in-person": [
      { slug: "card-reader", note: "Card reader — Glofox POS Terminal (WisePOS E) supported. (support.glofox.com)" },
      { slug: "tap-to-pay-on-iphone-android", note: "Tap to Pay on iPhone/Android — can’t find information" },
      { slug: "cash-drawer", note: "Cash drawer — can’t find information" },
      { slug: "receipt-printer", note: "Receipt printer — Email receipts supported; physical receipt printer support not documented. (support.glofox.com)" },
      { slug: "barcode-scanner", note: "Barcode scanner — Honeywell scanner configuration supported. (support.glofox.com)" },
    ],
    "pricing-models": [
      { slug: "single-class", note: "Single class (drop-in) — Yes. (glofox.com)" },
      { slug: "class-packs-punch-cards", note: "Class packs / punch cards — “Service Credit Packs.” (support.glofox.com)" },
      { slug: "memberships-subscriptions", note: "Memberships / subscriptions — Yes (unlimited & restricted). (ClubReady)" },
      { slug: "intro-offers", note: "Intro offers / Free trials — Trial memberships supported. (support.glofox.com)" },
      { slug: "free-trials", note: "Intro offers / Free trials — Trial memberships supported. (support.glofox.com)" },
      { slug: "tiered-pricing", note: "Tiered pricing — Multiple membership options/tiers implied by setup. (support.glofox.com)" },
      { slug: "pay-what-you-want", note: "Pay-what-you-want / Sliding scale / Corporate rates / Student/Senior rates — can’t find information" },
      { slug: "sliding-scale", note: "Pay-what-you-want / Sliding scale / Corporate rates / Student/Senior rates — can’t find information" },
      { slug: "corporate-rates", note: "Pay-what-you-want / Sliding scale / Corporate rates / Student/Senior rates — can’t find information" },
      { slug: "student-senior-rates", note: "Pay-what-you-want / Sliding scale / Corporate rates / Student/Senior rates — can’t find information" },
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Recurring billing — Yes (subscriptions). (support.glofox.com)" },
      { slug: "proration", note: "Proration — Documented for membership plan changes. (support.glofox.com)" },
      { slug: "dunning-retry-logic", note: "Dunning / retry logic — Auto-retries failed recurring payments (4 attempts). (support.glofox.com)" },
      { slug: "partial-payments", note: "Partial payments — Account Balance can be used toward partial subscription payments. (support.glofox.com)" },
      { slug: "deposits", note: "Deposits — can’t find information" },
      { slug: "split-payments", note: "Split payments — can’t find information" },
      { slug: "installments", note: "Installments — can’t find information" },
    ],
    "taxes-and-invoicing": [
      { slug: "vat-gst-hst", note: "VAT/GST/HST / Multiple tax rates / Tax inclusive–exclusive — Tax configuration for inclusive (global) and exclusive (US/CA) models. (support.glofox.com)" },
      { slug: "multiple-tax-rates", note: "VAT/GST/HST / Multiple tax rates / Tax inclusive–exclusive — Tax configuration for inclusive (global) and exclusive (US/CA) models. (support.glofox.com)" },
      { slug: "tax-inclusive-exclusive", note: "VAT/GST/HST / Multiple tax rates / Tax inclusive–exclusive — Tax configuration for inclusive (global) and exclusive (US/CA) models. (support.glofox.com)" },
      { slug: "automatic-tax-calculation", note: "Automatic tax calculation — can’t find information" },
      { slug: "fiscal-receipts", note: "Fiscal receipts — can’t find information" },
      { slug: "quotes", note: "Quotes — can’t find information" },
      { slug: "invoices", note: "Invoices / Email receipts — Purchase receipts (email) and downloadable invoices (for your Glofox subscription). (support.glofox.com)" },
      { slug: "credit-notes", note: "Credit notes — can’t find information" },
      { slug: "purchase-orders", note: "Purchase orders — can’t find information" },
    ],
    "discounts-and-credits": [
      { slug: "coupon-codes", note: "Coupon codes / Promo codes — Yes, promo codes for memberships and tracking insights. (support.glofox.com)" },
      { slug: "promo-codes", note: "Coupon codes / Promo codes — Yes, promo codes for memberships and tracking insights. (support.glofox.com)" },
      { slug: "auto-discounts", note: "Auto-discounts / Volume / Referral discounts — can’t find information (manual discounts available). (support.glofox.com)" },
      { slug: "volume-discounts", note: "Auto-discounts / Volume / Referral discounts — can’t find information (manual discounts available). (support.glofox.com)" },
      { slug: "referral-discounts", note: "Auto-discounts / Volume / Referral discounts — can’t find information (manual discounts available). (support.glofox.com)" },
      { slug: "loyalty-points-redemption", note: "Loyalty points redemption — Via Perkville integration (loyalty/referrals). (support.glofox.com)" },
      { slug: "gift-cards", note: "Gift cards — Implemented via Account Balance gift card value in Store. (support.glofox.com)" },
      { slug: "store-credit", note: "Store credit — “Account Balance” wallet. (support.glofox.com)" },
    ],
    "risk-and-compliance": [
      { slug: "3-d-secure-sca", note: "3-D Secure / SCA — Supported (cardholder authentication). (support.glofox.com)" },
      { slug: "pci-dss-compliance", note: "PCI DSS compliance — (Handled via Stripe/GoCardless; Glofox references Stripe Payments; no separate PCI statement found) can’t find information" },
      { slug: "avs-address-verification", note: "AVS / Address verification — can’t find information" },
      { slug: "chargeback-management", note: "Chargeback management — Disputes/chargebacks handled via Glofox Payments (Stripe). (support.glofox.com)" },
      { slug: "risk-scoring-fraud-checks", note: "Risk scoring / fraud checks — can’t find information" },
    ],
    "profiles": [
      { slug: "family-accounts", note: "Family accounts — Supported (enables parental waiver). (support.glofox.com)" },
      { slug: "corporate-accounts", note: "Corporate accounts — can’t find information" },
      { slug: "emergency-contacts", note: "Emergency contacts / Medical notes / Tags–segments — can’t find information" },
      { slug: "medical-notes", note: "Emergency contacts / Medical notes / Tags–segments — can’t find information" },
      { slug: "tags-segments", note: "Emergency contacts / Medical notes / Tags–segments — can’t find information" },
    ],
    "memberships": [
      { slug: "contract-terms", note: "Contract terms — can’t find information (E-agreements exist, but no contract term logic doc) (support.glofox.com)" },
      { slug: "freezes-holds", note: "Freezes / holds — Pause memberships (including prorated 1st-of-month plans). (support.glofox.com)" },
      { slug: "carryover-rules", note: "Carryover rules — can’t find information" },
      { slug: "cancellation-policies", note: "Cancellation policies — Schedule cancellations; cancellation settings exist. (support.glofox.com)" },
      { slug: "usage-limits", note: "Usage limits — “Restricted” memberships & credit limits. (support.glofox.com)" },
      { slug: "access-control-by-membership", note: "Access control by membership — Enforced via membership status (overdue lockout) and door-access integrations. (support.glofox.com)" },
    ],
    "passes": [
      { slug: "class-packs", note: "Class packs — Service Credit Packs. (support.glofox.com)" },
      { slug: "expiration-rules", note: "Expiration rules — Credit packs can have expiry dates; member can view expiry. (support.glofox.com)" },
      { slug: "shareable-passes", note: "Shareable passes — can’t find information" },
      { slug: "transfer-rules", note: "Transfer rules — can’t find information" },
    ],
    "loyalty-and-referral": [
      { slug: "points", note: "Points / Tiers / Referrals / Rewards catalog / Streaks–badges — Available via Perkville integration (loyalty & referrals). (support.glofox.com)" },
      { slug: "tiers", note: "Points / Tiers / Referrals / Rewards catalog / Streaks–badges — Available via Perkville integration (loyalty & referrals). (support.glofox.com)" },
      { slug: "referrals", note: "Points / Tiers / Referrals / Rewards catalog / Streaks–badges — Available via Perkville integration (loyalty & referrals). (support.glofox.com)" },
      { slug: "rewards-catalog", note: "Points / Tiers / Referrals / Rewards catalog / Streaks–badges — Available via Perkville integration (loyalty & referrals). (support.glofox.com)" },
      { slug: "streaks-badges", note: "Points / Tiers / Referrals / Rewards catalog / Streaks–badges — Available via Perkville integration (loyalty & referrals). (support.glofox.com)" },
    ],
    "gift-cards": [
      { slug: "digital-gift-cards", note: "Digital / Physical / Balance mgmt / Scheduled delivery — Gift value applied to Account Balance (digital wallet) via Store; no separate “card issuance” tooling documented. (support.glofox.com)" },
      { slug: "balance-management", note: "Digital / Physical / Balance mgmt / Scheduled delivery — Gift value applied to Account Balance (digital wallet) via Store; no separate “card issuance” tooling documented. (support.glofox.com)" },
      { slug: "physical-gift-cards", note: "Digital / Physical / Balance mgmt / Scheduled delivery — Gift value applied to Account Balance (digital wallet) via Store; no separate “card issuance” tooling documented. (support.glofox.com)" },
      { slug: "scheduled-delivery", note: "Digital / Physical / Balance mgmt / Scheduled delivery — Gift value applied to Account Balance (digital wallet) via Store; no separate “card issuance” tooling documented. (support.glofox.com)" },
    ],
    "community": [
      { slug: "forums-groups", note: "Forums / groups / Leaderboards / Challenges — can’t find information (gamification possible via Perkville, but not native). (support.glofox.com)" },
      { slug: "leaderboards", note: "Forums / groups / Leaderboards / Challenges — can’t find information (gamification possible via Perkville, but not native). (support.glofox.com)" },
      { slug: "challenges", note: "Forums / groups / Leaderboards / Challenges — can’t find information (gamification possible via Perkville, but not native). (support.glofox.com)" },
    ],
    "admin-and-permissions": [
      { slug: "role-based-permissions", note: "Role-based permissions / Field-level permissions / Audit logs — can’t find information" },
      { slug: "field-level-permissions", note: "Role-based permissions / Field-level permissions / Audit logs — can’t find information" },
      { slug: "audit-logs", note: "Role-based permissions / Field-level permissions / Audit logs — can’t find information" },
    ],
    "scheduling-and-availability": [
      { slug: "staff-scheduling", note: "Staff scheduling / Availability rules — Trainer availability & schedule management supported (Glofox Pro). (support.glofox.com)" },
      { slug: "availability-rules", note: "Staff scheduling / Availability rules — Trainer availability & schedule management supported (Glofox Pro). (support.glofox.com)" },
      { slug: "time-off", note: "Time-off / Shift swaps — can’t find information" },
      { slug: "shift-swaps", note: "Time-off / Shift swaps — can’t find information" },
    ],
    "compensation": [
      { slug: "payroll-export", note: "Payroll export / Commission structures / Tips / Tip pools / Performance dashboards — can’t find information" },
      { slug: "commission-structures", note: "Payroll export / Commission structures / Tips / Tip pools / Performance dashboards — can’t find information" },
      { slug: "tips", note: "Payroll export / Commission structures / Tips / Tip pools / Performance dashboards — can’t find information" },
      { slug: "tip-pools", note: "Payroll export / Commission structures / Tips / Tip pools / Performance dashboards — can’t find information" },
      { slug: "performance-dashboards", note: "Payroll export / Commission structures / Tips / Tip pools / Performance dashboards — can’t find information" },
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Contact CRM — Client profiles, transactions, memberships, credits. (support.glofox.com)" },
      { slug: "lead-capture-forms", note: "Lead capture forms — Lead Capture via Web Portal; leads tracked with filters. (support.glofox.com)" },
      { slug: "lead-pipeline-stages", note: "Lead pipeline / stages — Lead status (lead/trial/cold) and filters. (support.glofox.com)" },
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Email marketing / SMS marketing — Messages and SMS tools. (support.glofox.com)" },
      { slug: "sms-marketing", note: "Email marketing / SMS marketing — Messages and SMS tools. (support.glofox.com)" },
      { slug: "marketing-automation", note: "Marketing automation — Automations & XLerate workflows (includes cart abandonment). (support.glofox.com)" },
      { slug: "abandoned-booking-recovery", note: "Abandoned booking recovery — Included in XLerate workflows. (support.glofox.com)" },
      { slug: "promo-codes", note: "Promo codes — Yes. (support.glofox.com)" },
      { slug: "landing-pages", note: "Landing pages / SEO tools — can’t find information" },
      { slug: "seo-tools", note: "Landing pages / SEO tools — can’t find information" },
    ],
    "ads-and-tracking": [
      { slug: "facebook-ads-pixel", note: "Facebook Ads pixel — Native Meta Pixel integration with event mapping. (support.glofox.com)" },
      { slug: "google-ads-conversion", note: "Google Ads conversion — Supported via Google Tag Manager / GA4 setup (conversion/retargeting). (support.glofox.com)" },
    ],
  },
}, {
  id: "zen-planner",
  name: "Zen Planner",
  url: "https://zenplanner.com/",
  additionalInfo: [
    "HybridAF integration enables 24/7 unattended access tied to Zen Planner membership/check-ins. (Zen Planner)",
    "Martial arts-specific features like belt/rank tracking are native strengths. (Zen Planner)",
    "SugarWOD integration adds community features (workout logging, leaderboards, custom push notifications). (Zen Planner)",
    "Zen Planner Engage (add-on) brings 2-way SMS, WhatsApp, chat widget, and Stripe/Authorize.Net/NMI integrations for custom flows. (Zen Planner)",
    "Payments handled via Zen Planner Payments (ISO of Fiserv) with ACH/EFT support and CardPointe portal access. (Zen Planner)",
    "ICS calendar sharing exists; 2-way Google/Outlook/iCloud not confirmed. (Zen Planner)"
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Website widget / Embedded iframe – Embed calendars/forms on your site for booking and free-trial signups. (Zen Planner)" },
      { slug: "embedded-iframe", note: "Website widget / Embedded iframe – Embed calendars/forms on your site for booking and free-trial signups. (Zen Planner)" },
      { slug: "branded-microsite", note: "Branded microsite — can’t find information (member portal + optional full websites exist, but no separate 'microsite' product). (Zen Planner)" },
      { slug: "ios-app", note: "iOS app – Member App + Staff App. (Zen Planner)" },
      { slug: "android-app", note: "Android app – Member App + Staff App. (Zen Planner)" },
      { slug: "facebook-instagram-booking", note: "Facebook/Instagram booking — can’t find information (lead ads/forms in Engage exist; not native booking). (Zen Planner)" },
      { slug: "google-reserve", note: "Google Reserve — can’t find information." },
      { slug: "phone-in-person-entry", note: "Phone / in-person entry – Staff App/Front Desk for staff-led booking/check-ins & retail. (daxkoneworg.my.site.com)" },
      { slug: "kiosk-self-service", note: "Kiosk / self-service – Kiosk Mode for self check-in, document signing, bill pay, and retail. (Zen Planner)" },
      { slug: "custom-portal-via-api", note: "Custom portal via API – Public API available via Zen Planner Engage. (Zen Planner)" }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Drop-in / single session – Supported; drop-in setup guidance published. (Zen Planner)" },
      { slug: "course-multi-session-series", note: "Course / multi-session series – Supported. (daxkoneworg.my.site.com)" },
      { slug: "workshops-events", note: "Workshops / events – Supported. (daxkoneworg.my.site.com)" },
      { slug: "private-1-1", note: "Private 1:1 – Appointments/personal training supported. (Zen Planner)" },
      { slug: "semi-private-small-group", note: "Semi-private / small group – Supported via small-group sessions. (Zen Planner)" },
      { slug: "virtual-live-video", note: "Virtual live (video) – Supported via hybrid/virtual program workflows (e.g., SugarWOD virtual gym). (Zen Planner)" },
      { slug: "on-demand-recorded-content", note: "On-demand / recorded – Evidence via course/audio lessons & SugarWOD programs; not a full native VOD library. (daxkoneworg.my.site.com)" }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Recurring classes – Yes (core scheduler). (Zen Planner)" },
      { slug: "rolling-enrollments", note: "Rolling enrollments — can’t find information." },
      { slug: "fixed-date-courses", note: "Fixed-date courses – Yes. (daxkoneworg.my.site.com)" },
      { slug: "waitlist-for-courses", note: "Waitlist for courses — can’t find information (classes have waitlists)."}
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Capacity limit – Per-class and per-day reservation limits. (daxkoneworg.my.site.com)" },
      { slug: "equipment-based-capacity", note: "Equipment-based capacity — can’t find information." },
      { slug: "overbooking-allowance", note: "Overbooking allowance — can’t find information." },
      { slug: "waitlist", note: "Waitlist – Member self-join + automation. (Zen Planner)" },
      { slug: "auto-promotion-from-waitlist", note: "Auto-promotion from waitlist – Auto-promote from waitlist. (Zen Planner)" },
      { slug: "booking-window-open-close", note: "Booking window (open/close) — can’t find information." },
      { slug: "cut-off-time-before-start", note: "Cut-off time before start – Kiosk check-in default cutoff 15 minutes before start. (daxkoneworg.my.site.com)" },
      { slug: "late-cancel-rules", note: "Late cancel rules – Prevent last-minute cancellation window + fees. (daxkoneworg.my.site.com)" },
      { slug: "no-show-fee", note: "No-show fee – Workflow exists. (daxkoneworg.my.site.com)" },
      { slug: "grace-periods", note: "Grace periods — can’t find information." },
      { slug: "buffer-times-between-classes", note: "Buffer times between classes — can’t find information." }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Rooms / locations – Supported. (Zen Planner)" },
      { slug: "equipment", note: "Equipment — can’t find information." },
      { slug: "instructors", note: "Instructors – Assign instructors to classes/appointments. (daxkoneworg.my.site.com)" },
      { slug: "multiple-resources-per-booking", note: "Multiple resources per booking — can’t find information." },
      { slug: "conflict-detection-prevention", note: "Conflict detection / prevention – Promoted as eliminating scheduling conflicts. (Zen Planner)" }
    ],
    "calendar-sync": [
      { slug: "ics-feed-1-way", note: "ICS feed (1-way) – iCalendar sharing for read-only sync. (Zen Planner)" },
      { slug: "google-calendar-2-way", note: "Google Calendar (2-way) — can’t find information (marketing mentions Google integration but 2-way not confirmed). (Zen Planner)" },
      { slug: "outlook-2-way", note: "Outlook (2-way) — can’t find information." },
      { slug: "icloud-2-way", note: "iCloud (2-way) — can’t find information." }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Staff check-in – Welcome Desk/Staff App. (Zen Planner)" },
      { slug: "mobile-app-check-in", note: "Mobile app check-in – Via Staff App/Kiosk on mobile devices. (Zen Planner)" },
      { slug: "kiosk-ipad-check-in", note: "Kiosk / iPad check-in – Yes. (Zen Planner)" },
      { slug: "qr-code-barcode-scanning", note: "QR code / barcode scanning – QR or swipe card check-ins; barcode scanners supported. (Zen Planner)" },
      { slug: "nfc-rfid", note: "NFC / RFID — can’t find information." },
      { slug: "turnstile-door-access-integration", note: "Turnstile / door access – HybridAF 24/7 access. (Zen Planner)" }
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "Custom intake forms – Registration forms in Studio & Engage. (daxkoneworg.my.site.com)" },
      { slug: "custom-fields", note: "Custom fields – Supported in forms. (daxkoneworg.my.site.com)" },
      { slug: "e-sign-waivers", note: "E-sign waivers – Yes. (Zen Planner)" },
      { slug: "conditional-logic", note: "Conditional logic — can’t find information." },
      { slug: "health-screening", note: "Health screening — can’t find information." },
      { slug: "parental-consent", note: "Parental consent — can’t find information (Parent Portal exists). (Zen Planner)" },
      { slug: "photo-video-consent", note: "Photo/video consent — can’t find information." },
      { slug: "per-class-forms", note: "Per-class forms — can’t find information." }
    ],
    "booking-models": [
      { slug: "guest-checkout", note: "Guest checkout – Guest checkout for retail; prospects can sign up for free trials. (daxkoneworg.my.site.com)" },
      { slug: "account-required", note: "Account required – Member accounts for ongoing booking/billing. (Zen Planner)" },
      { slug: "family-group-bookings", note: "Family / group bookings – Family/parent portal exists; explicit group booking not documented. (Zen Planner)" },
      { slug: "corporate-team-bookings", note: "Corporate / team bookings — can’t find information." },
      { slug: "multi-attendee-in-one-booking", note: "Multi-attendee in one booking — can’t find information (staff can add multiple attendees; customer multi-add not confirmed)." },
      { slug: "add-on-upsells-at-checkout", note: "Add-on upsells at checkout — can’t find information (retail during kiosk checkout supported). (Zen Planner)" }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Email reminders – Automated. (Zen Planner)" },
      { slug: "sms-reminders", note: "SMS reminders – Studio = one-way; Engage = 2-way. (daxkoneworg.my.site.com)" },
      { slug: "push-notifications", note: "Push notifications – Member app; also via SugarWOD. (Zen Planner)" },
      { slug: "whatsapp-notifications", note: "WhatsApp notifications – Yes (Engage). (Zen Planner)" },
      { slug: "two-way-sms", note: "Two-way SMS – Yes (Engage). (daxkoneworg.my.site.com)" },
      { slug: "custom-templates", note: "Custom templates – Yes (Engage). (daxkoneworg.my.site.com)" },
      { slug: "automated-waitlist-messages", note: "Automated waitlist messages — can’t find explicit doc (waitlist automation exists). (Zen Planner)" }
    ],
    "payment-gateways": [
      { slug: "stripe", note: "Stripe – Supported via Zen Planner Engage integrations. (daxkoneworg.my.site.com)" },
      { slug: "authorize-net", note: "Authorize.Net – Supported via Engage. (daxkoneworg.my.site.com)" },
      { slug: "paypal", note: "PayPal — can’t find information." },
      { slug: "square", note: "Square — can’t find information." },
      { slug: "adyen", note: "Adyen — can’t find information." },
      { slug: "braintree", note: "Braintree — can’t find information." },
      { slug: "worldpay", note: "Worldpay — can’t find information." },
      { slug: "mollie", note: "Mollie — can’t find information." },
      { slug: "razorpay", note: "Razorpay — can’t find information." },
      { slug: "paystack", note: "Paystack — can’t find information." },
      { slug: "payu", note: "PayU — can’t find information." },
      { slug: "mercado-pago", note: "Mercado Pago — can’t find information." },
      { slug: "2checkout", note: "2Checkout — can’t find information." },
      { slug: "checkout-com", note: "Checkout.com — can’t find information." },
      { slug: "klarna-payments", note: "Klarna — can’t find information." }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Credit/Debit cards – Yes. (Zen Planner)" },
      { slug: "ach-debit", note: "ACH Debit / EFT – US ACH; CA/other regions EFT/direct debit. (daxkoneworg.my.site.com)" },
      { slug: "cash", note: "Cash – Offline payments supported. (daxkoneworg.my.site.com)" },
      { slug: "cheque", note: "Cheque/Check – Supported. (daxkoneworg.my.site.com)" }
    ],
    "point-of-sale-in-person": [
      { slug: "card-reader", note: "Card reader / swiper – Supported (MagTek etc.). (daxkoneworg.my.site.com)" },
      { slug: "barcode-scanner", note: "Barcode scanner – Supported scanners. (daxkoneworg.my.site.com)" },
      { slug: "tap-to-pay-on-iphone-android", note: "Tap to Pay on iPhone/Android — can’t find information." },
      { slug: "cash-drawer", note: "Cash drawer — can’t find information." },
      { slug: "receipt-printer", note: "Receipt printer — can’t find information." }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Single class (drop-ins) – Yes. (Zen Planner)" },
      { slug: "class-packs-punch-cards", note: "Class packs / punch cards – Class Card/Punch Card memberships. (daxkoneworg.my.site.com)" },
      { slug: "memberships-subscriptions", note: "Memberships / subscriptions – Yes. (Zen Planner)" },
      { slug: "intro-offers", note: "Intro offers – Supported. (Zen Planner)" },
      { slug: "free-trials", note: "Free trials – Supported. (Zen Planner)" },
      { slug: "tiered-pricing", note: "Tiered pricing – Indicated (unlimited, punch passes, private bundles). (Zen Planner)" }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Recurring billing – Automated. (Zen Planner)" },
      { slug: "dunning-retry-logic", note: "Dunning / card updater – Card updater & revenue recovery tools. (Zen Planner)" },
      { slug: "installments", note: "Installments / payment plans – Supported via invoice payment plans. (daxkoneworg.my.site.com)" }
    ],
    "taxes-and-invoicing": [
      { slug: "invoices", note: "Invoices – Members pay invoices; financials tracked. (daxkoneworg.my.site.com)" }
    ],
    "discounts-and-credits": [
      { slug: "referral-discounts", note: "Referral discounts – Via Perkville integration (loyalty/referrals). (Zen Planner)" },
      { slug: "loyalty-points-redemption", note: "Loyalty points redemption – Via Perkville. (Zen Planner)" },
      { slug: "gift-cards", note: "Gift cards – Supported in retail. (daxkoneworg.my.site.com)" }
    ],
    "risk-and-compliance": [
      { slug: "pci-dss-compliance", note: "PCI DSS compliance – Claimed. (Zen Planner)" }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Family accounts – Parent Portal. (Zen Planner)" }
    ],
    "memberships": [
      { slug: "contract-terms", note: "Contract terms – E-signed contracts/waivers supported. (Zen Planner)" },
      { slug: "cancellation-policies", note: "Cancellation policies – Late cancel + membership cancellation workflow. (daxkoneworg.my.site.com)" },
      { slug: "usage-limits", note: "Usage limits – e.g., 3x/week, class cards. (daxkoneworg.my.site.com)" }
    ],
    "passes": [
      { slug: "class-packs", note: "Class packs – Class Cards. (daxkoneworg.my.site.com)" }
    ],
    "loyalty-and-referral": [
      { slug: "points", note: "Points – Perkville (loyalty/referrals). (Zen Planner)" },
      { slug: "tiers", note: "Tiers – SugarWOD leaderboards/badges; Perkville for loyalty. (Zen Planner)" },
      { slug: "referrals", note: "Referrals – Perkville. (Zen Planner)" },
      { slug: "rewards-catalog", note: "Rewards catalog – Perkville prizes. (WellnessLiving/Perkville ecosystem)" },
      { slug: "streaks-badges", note: "Streaks / badges – SugarWOD. (Zen Planner)" }
    ],
    "gift-cards": [
      { slug: "digital-gift-cards", note: "Digital gift cards – Sold/redeemed in retail. (daxkoneworg.my.site.com)" },
      { slug: "physical-gift-cards", note: "Physical gift cards – Sold/redeemed in retail. (daxkoneworg.my.site.com)" },
      { slug: "balance-management", note: "Balance management – Gift card management in retail. (daxkoneworg.my.site.com)" },
      { slug: "scheduled-delivery", note: "Scheduled delivery — can’t find information." }
    ],
    "community": [
      { slug: "leaderboards", note: "Leaderboards – Via SugarWOD integration. (daxkoneworg.my.site.com)" },
      { slug: "challenges", note: "Challenges – Via SugarWOD. (daxkoneworg.my.site.com)" },
      { slug: "forums-groups", note: "Forums / groups — can’t find information." }
    ],
    "admin-and-permissions": [
      { slug: "role-based-permissions", note: "Role-based permissions — can’t find information in public docs." },
      { slug: "field-level-permissions", note: "Field-level permissions — can’t find information." },
      { slug: "audit-logs", note: "Audit logs — can’t find information." }
    ],
    "scheduling-and-availability": [
      { slug: "staff-scheduling", note: "Staff scheduling – Core scheduling & instructor assignment exist. (daxkoneworg.my.site.com)" },
      { slug: "availability-rules", note: "Availability rules – Core scheduling & instructor assignment exist. (daxkoneworg.my.site.com)" },
      { slug: "time-off", note: "Time-off — can’t find information." },
      { slug: "shift-swaps", note: "Shift swaps — can’t find information." }
    ],
    "compensation": [
      { slug: "payroll-export", note: "Payroll export — can’t find information." },
      { slug: "commission-structures", note: "Commission structures — can’t find information." },
      { slug: "tips", note: "Tips — can’t find information." },
      { slug: "tip-pools", note: "Tip pools — can’t find information." },
      { slug: "performance-dashboards", note: "Performance dashboards — can’t find information." }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Contact CRM – Client profiles. (Zen Planner)" },
      { slug: "lead-capture-forms", note: "Lead capture forms – Embedded forms + chat widget. (Zen Planner)" },
      { slug: "lead-pipeline-stages", note: "Lead pipeline / stages – Prospect Funnel (ZP/Engage). (daxkoneworg.my.site.com)" }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Email marketing – Yes. (Zen Planner)" },
      { slug: "sms-marketing", note: "SMS marketing – One-way in Studio; 2-way in Engage. (daxkoneworg.my.site.com)" },
      { slug: "marketing-automation", note: "Marketing automation – Engage automations. (Zen Planner)" },
      { slug: "abandoned-booking-recovery", note: "Abandoned booking recovery — can’t find information." },
      { slug: "promo-codes", note: "Promo codes — can’t find information (retail discounts exist). (daxkoneworg.my.site.com)" },
      { slug: "landing-pages", note: "Landing pages – Provided via their web/marketing services. (Zen Planner)" },
      { slug: "seo-tools", note: "SEO tools – Provided via services. (Zen Planner)" }
    ],
    "ads-and-tracking": [
      { slug: "facebook-ads-pixel", note: "Facebook Ads pixel – Addressed via marketing/web services; product docs not public. (Zen Planner)" },
      { slug: "google-ads-conversion", note: "Google Ads conversion – Addressed via marketing/web services. (Zen Planner)" }
    ]
  }
},
{
  id: "wellnessliving",
  name: "WellnessLiving",
  url: "https://www.wellnessliving.com/",
  additionalInfo: [
    "Built-in Zoom app (FitLIVE) for virtual services. (help.wellnessliving.com)",
    "On-demand video (FitVID) with free-trial options. (help.wellnessliving.com)",
    "Two-way SMS (Message Center) with A2P 10DLC; confirm waitlist spots by reply. (help.wellnessliving.com)",
    "Door access integrations (Brivo/Passport) incl. NFC/RFID and auto check-in. (help.wellnessliving.com)",
    "Public API + Webhooks + Developer portal. (WellnessLiving)",
    "Presence websites + Explorer marketplace; Reserve with Google supported. (help.wellnessliving.com)",
    "Rewards (points, prizes, referrals) built-in. (WellnessLiving)",
    "Collections add-on (Aldous & Associates) for overdue payments. (help.wellnessliving.com)",
    "Fraud-prevention to block card testing. (help.wellnessliving.com)",
    "PCI posture: WL doesn’t store cards; processors are PCI-DSS compliant; merchants must maintain compliance. (help.wellnessliving.com)"
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Website widget — booking widgets are part of the platform. (help.wellnessliving.com)" },
      { slug: "branded-microsite", note: "Branded microsite — Presence custom websites + Explorer public listings. (help.wellnessliving.com)" },
      { slug: "ios-app", note: "iOS app — Achieve Client App. (help.wellnessliving.com)" },
      { slug: "android-app", note: "Android app — Achieve Client App. (help.wellnessliving.com)" },
      { slug: "google-reserve", note: "Google Reserve — Supported; routes to Explorer booking. (help.wellnessliving.com)" },
      { slug: "phone-in-person-entry", note: "Phone / in-person entry — Staff Back Office / Elevate Staff App. (help.wellnessliving.com)" },
      { slug: "kiosk-self-service", note: "Kiosk / self-service — Client Self Check-In App & Self Registration E-Kiosk. (help.wellnessliving.com)" },
      { slug: "custom-portal-via-api", note: "Custom portal via API — Public API + Webhooks. (WellnessLiving)" },
      { slug: "facebook-instagram-booking", note: "Facebook/Instagram booking — can’t find information." },
      { slug: "embedded-iframe", note: "Embedded iframe — can’t find information." }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Drop-in / single session — Supported. (help.wellnessliving.com)" },
      { slug: "course-multi-session-series", note: "Course / multi-session series — Events with scheduled instances. (help.wellnessliving.com)" },
      { slug: "workshops-events", note: "Workshops / events — Supported. (help.wellnessliving.com)" },
      { slug: "private-1-1", note: "Private 1:1 — Appointments. (help.wellnessliving.com)" },
      { slug: "semi-private-small-group", note: "Semi-private / small group — can’t find information." },
      { slug: "virtual-live-video", note: "Virtual live (video) — FitLIVE (Zoom integration). (help.wellnessliving.com)" },
      { slug: "on-demand-recorded-content", note: "On-demand / recorded — FitVID on Demand. (help.wellnessliving.com)" }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Recurring classes — Clients can book recurring sessions; business policy supports recurring bookings. (help.wellnessliving.com)" },
      { slug: "rolling-enrollments", note: "Rolling enrollments — can’t find information." },
      { slug: "fixed-date-courses", note: "Fixed-date courses — Event instances/dates. (help.wellnessliving.com)" },
      { slug: "waitlist-for-courses", note: "Waitlist for courses — Waitlists exist for classes, appointments, events. (help.wellnessliving.com)" }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Capacity limit — Set per class/event. (help.wellnessliving.com)" },
      { slug: "equipment-based-capacity", note: "Equipment-based capacity — Book-a-Spot assets required/selected. (help.wellnessliving.com)" },
      { slug: "overbooking-allowance", note: "Overbooking allowance — Staff permission can allow over capacity/waitlist. (help.wellnessliving.com)" },
      { slug: "waitlist", note: "Waitlist — Supported. (help.wellnessliving.com)" },
      { slug: "auto-promotion-from-waitlist", note: "Auto-promotion from waitlist — Promotion flows + confirmations via email/SMS. (help.wellnessliving.com)" },
      { slug: "booking-window-open-close", note: "Booking window (open/close) — Publish/unpublish windows, [PublishDate] variable. (help.wellnessliving.com)" },
      { slug: "cut-off-time-before-start", note: "Cut-off time before start — can’t find information." },
      { slug: "late-cancel-rules", note: "Late cancel rules — Thresholds & penalties in business policies. (help.wellnessliving.com)" },
      { slug: "no-show-fee", note: "No-show fee — Penalty can be configured. (help.wellnessliving.com)" },
      { slug: "grace-periods", note: "Grace periods — Referenced in Collections add-on for overdue payments. (help.wellnessliving.com)" },
      { slug: "buffer-times-between-classes", note: "Buffer times between classes — Appointment padding setting. (help.wellnessliving.com)" }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Rooms / locations — Locations & Book-a-Spot assets. (help.wellnessliving.com)" },
      { slug: "equipment", note: "Equipment — Book-a-Spot assets. (help.wellnessliving.com)" },
      { slug: "instructors", note: "Instructors — Staff schedules & assignment. (help.wellnessliving.com)" },
      { slug: "multiple-resources-per-booking", note: "Multiple resources per booking — Select assets + staff for an appointment. (help.wellnessliving.com)" },
      { slug: "conflict-detection-prevention", note: "Conflict detection / prevention — can’t find information." }
    ],
    "calendar-sync": [
      { slug: "google-calendar-2-way", note: "Google Calendar (2-way) — Supported for staff; adds virtual links; limitations documented. (help.wellnessliving.com)" },
      { slug: "outlook-2-way", note: "Outlook (2-way) — Supported for staff; rules documented. (help.wellnessliving.com)" },
      { slug: "icloud-2-way", note: "iCloud (2-way) — can’t find information (clients can subscribe; staff 2-way not confirmed). (help.wellnessliving.com)" },
      { slug: "ics-feed-1-way", note: "ICS feed (1-way) — .ics files can be added to personal calendars. (help.wellnessliving.com)" }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Staff check-in — Check-in workflows. (help.wellnessliving.com)" },
      { slug: "mobile-app-check-in", note: "Mobile app check-in — Barcode/key-tag from Achieve app. (WellnessLiving)" },
      { slug: "kiosk-ipad-check-in", note: "Kiosk / iPad check-in — Client Self Check-In & Self Registration E-Kiosk. (help.wellnessliving.com)" },
      { slug: "qr-code-barcode-scanning", note: "QR code / barcode scanning — Barcode scanning supported; QR not explicit. (WellnessLiving)" },
      { slug: "nfc-rfid", note: "NFC / RFID — Supported via Door Access partners. (help.wellnessliving.com)" },
      { slug: "turnstile-door-access-integration", note: "Turnstile / door access — Brivo & Passport integrations. (help.wellnessliving.com)" }
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "Custom intake forms — Form builder; attach to bookings/purchases. (WellnessLiving)" },
      { slug: "custom-fields", note: "Custom fields — Supported in forms. (WellnessLiving)" },
      { slug: "e-sign-waivers", note: "E-sign waivers — Digital signatures supported. (WellnessLiving)" },
      { slug: "health-screening", note: "Health screening — Registration forms include health history & emergency contact. (help.wellnessliving.com)" },
      { slug: "parental-consent", note: "Parental consent — Guardian can sign for minors. (help.wellnessliving.com)" },
      { slug: "per-class-forms", note: "Per-class forms — Forms can be attached to bookings/purchases. (WellnessLiving)" },
      { slug: "conditional-logic", note: "Conditional logic — can’t find information." },
      { slug: "photo-video-consent", note: "Photo/video consent — can’t find information." }
    ],
    "booking-models": [
      { slug: "guest-checkout", note: "Guest checkout — Guests exist and can be converted to clients. (help.wellnessliving.com)" },
      { slug: "account-required", note: "Account required — Classes can require sign-in to view/book. (help.wellnessliving.com)" },
      { slug: "family-group-bookings", note: "Family / group bookings — Relationships allow booking/payment for family; share passes/memberships. (help.wellnessliving.com)" },
      { slug: "corporate-team-bookings", note: "Corporate / team bookings — can’t find information." },
      { slug: "multi-attendee-in-one-booking", note: "Multi-attendee in one booking — can’t find information." },
      { slug: "add-on-upsells-at-checkout", note: "Add-on upsells at checkout — Prepaid service add-ons supported. (help.wellnessliving.com)" }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Email reminders — Extensive client notification types. (help.wellnessliving.com)" },
      { slug: "sms-reminders", note: "SMS reminders — Automated notifications; per-SMS pricing noted. (help.wellnessliving.com)" },
      { slug: "push-notifications", note: "Push notifications — Forms can be pushed via app notifications (Achieve). (help.wellnessliving.com)" },
      { slug: "two-way-sms", note: "Two-way SMS — Message Center supports 2-way SMS + confirmations (A2P 10DLC). (help.wellnessliving.com)" },
      { slug: "custom-templates", note: "Custom templates — Service-specific customizations + variables. (help.wellnessliving.com)" },
      { slug: "automated-waitlist-messages", note: "Automated waitlist messages — Waitlist promotion notifications. (help.wellnessliving.com)" },
      { slug: "whatsapp-notifications", note: "WhatsApp notifications — can’t find information." }
    ],
    "payment-gateways": [
      { slug: "stripe", note: "Stripe — can’t find information (uses NMI + regional processors). (help.wellnessliving.com)" },
      { slug: "paypal", note: "PayPal — can’t find information." },
      { slug: "square", note: "Square — can’t find information." },
      { slug: "adyen", note: "Adyen — can’t find information." },
      { slug: "braintree", note: "Braintree — can’t find information." },
      { slug: "authorize-net", note: "Authorize.Net — can’t find information (NMI gateway in use). (help.wellnessliving.com)" },
      { slug: "worldpay", note: "Worldpay — can’t find information." },
      { slug: "mollie", note: "Mollie — can’t find information." },
      { slug: "razorpay", note: "Razorpay — can’t find information." },
      { slug: "paystack", note: "Paystack — can’t find information." },
      { slug: "payu", note: "PayU — can’t find information." },
      { slug: "mercado-pago", note: "Mercado Pago — can’t find information." },
      { slug: "2checkout", note: "2Checkout — can’t find information." },
      { slug: "checkout-com", note: "Checkout.com — can’t find information." },
      { slug: "klarna-payments", note: "Klarna — can’t find information." }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Cards (Visa/Mastercard/Amex/Discover) — Accepted; card types configurable. (help.wellnessliving.com)" },
      { slug: "apple-pay", note: "Apple Pay — Supported in-person on Paragon Verifone terminals. (help.wellnessliving.com)" },
      { slug: "google-pay", note: "Google Pay — Supported in-person on Paragon Verifone terminals. (help.wellnessliving.com)" },
      { slug: "ach-debit", note: "ACH Debit — Supported (apply via processor; good for recurring). (help.wellnessliving.com)" },
      { slug: "cash", note: "Cash — Supported; cash accounting option. (help.wellnessliving.com)" },
      { slug: "cheque", note: "Cheque — Supported (e.g., post-dated checks). (help.wellnessliving.com)" }
    ],
    "point-of-sale-in-person": [
      { slug: "card-reader", note: "Card reader — USB swiper, Bluetooth mobile reader, chip & PIN terminals. (help.wellnessliving.com)" },
      { slug: "cash-drawer", note: "Cash drawer — Supported hardware. (WellnessLiving)" },
      { slug: "receipt-printer", note: "Receipt printer — Supported hardware. (WellnessLiving)" },
      { slug: "barcode-scanner", note: "Barcode scanner — Supported hardware. (WellnessLiving)" },
      { slug: "tap-to-pay-on-iphone-android", note: "Tap to Pay on iPhone/Android — can’t find information (contactless via terminals supported). (help.wellnessliving.com)" }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Single class (drop-in) — Supported. (help.wellnessliving.com)" },
      { slug: "class-packs-punch-cards", note: "Class packs / punch cards — Session Passes. (help.wellnessliving.com)" },
      { slug: "memberships-subscriptions", note: "Memberships / subscriptions — Recurring billing & auto-renew. (help.wellnessliving.com)" },
      { slug: "intro-offers", note: "Intro offers — Via session pass configuration. (help.wellnessliving.com)" },
      { slug: "free-trials", note: "Free trials — FitVID on Demand. (help.wellnessliving.com)" },
      { slug: "student-senior-rates", note: "Student/Senior rates — Achievable via client-type automatic discounts. (help.wellnessliving.com)" }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Recurring billing — Memberships, auto-payments. (help.wellnessliving.com)" },
      { slug: "proration", note: "Proration — Changing billing date prorates. (help.wellnessliving.com)" },
      { slug: "dunning-retry-logic", note: "Dunning / retry logic — Multiple attempts or retry another card. (help.wellnessliving.com)" },
      { slug: "partial-payments", note: "Partial payments — Apply partial to account balance. (help.wellnessliving.com)" },
      { slug: "split-payments", note: "Split payments — Split across tenders/account balance. (help.wellnessliving.com)" },
      { slug: "deposits", note: "Deposits — Referenced in sales/checkout behaviors. (help.wellnessliving.com)" },
      { slug: "installments", note: "Installments — Payment plans at checkout. (help.wellnessliving.com)" }
    ],
    "taxes-and-invoicing": [
      { slug: "vat-gst-hst", note: "VAT/GST/HST — Configurable per location/items. (help.wellnessliving.com)" },
      { slug: "multiple-tax-rates", note: "Multiple tax rates — Configurable. (help.wellnessliving.com)" },
      { slug: "tax-inclusive-exclusive", note: "Tax inclusive/exclusive — Receipts show subtotal + tax; inclusive not explicitly documented. (help.wellnessliving.com)" },
      { slug: "invoices", note: "Invoices / Receipts — Printable/emailed; can serve as invoices. (help.wellnessliving.com)" }
    ],
    "discounts-and-credits": [
      { slug: "coupon-codes", note: "Coupon codes / Promo codes — Discount codes with rules. (help.wellnessliving.com)" },
      { slug: "auto-discounts", note: "Auto-discounts — Auto-apply based on client type. (help.wellnessliving.com)" },
      { slug: "loyalty-points-redemption", note: "Loyalty points redemption — Rewards program with points & prizes. (WellnessLiving)" },
      { slug: "gift-cards", note: "Gift cards — Digital & custom branded (code-based). (help.wellnessliving.com)" },
      { slug: "store-credit", note: "Store credit — Client account balance. (help.wellnessliving.com)" }
    ],
    "risk-and-compliance": [
      { slug: "pci-dss-compliance", note: "PCI DSS — WL doesn’t store/process cards; processors are PCI-DSS compliant; merchants must maintain compliance. (help.wellnessliving.com)" },
      { slug: "risk-scoring-fraud-checks", note: "Risk scoring / fraud checks — Automated prevention for card testing. (help.wellnessliving.com)" }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Family accounts — Relationships; book/pay for dependents; share passes/memberships. (help.wellnessliving.com)" },
      { slug: "emergency-contacts", note: "Emergency contacts — Captured on registration/intake forms. (help.wellnessliving.com)" },
      { slug: "medical-notes", note: "Medical notes — Upload medical forms to client profile. (help.wellnessliving.com)" },
      { slug: "tags-segments", note: "Tags / segments — Client groups & reports. (help.wellnessliving.com)" }
    ],
    "memberships": [
      { slug: "freezes-holds", note: "Freezes / holds — Membership hold rules. (help.wellnessliving.com)" },
      { slug: "cancellation-policies", note: "Cancellation policies — FTC Click-to-Cancel guidance + notifications. (help.wellnessliving.com)" }
    ],
    "passes": [
      { slug: "class-packs", note: "Class packs — Session passes. (help.wellnessliving.com)" },
      { slug: "expiration-rules", note: "Expiration rules — Activation/expiration settings. (help.wellnessliving.com)" },
      { slug: "shareable-passes", note: "Shareable passes — Share within family relationships. (help.wellnessliving.com)" }
    ],
    "loyalty-and-referral": [
      { slug: "points", note: "Points — Rewards program. (WellnessLiving)" },
      { slug: "referrals", note: "Referrals — Points can be awarded for referrals. (WellnessLiving)" }
    ],
    "gift-cards": [
      { slug: "digital-gift-cards", note: "Digital gift cards — Online sales & code redemption. (help.wellnessliving.com)" },
      { slug: "physical-gift-cards", note: "Physical gift cards — Custom branded; redeemed by code. (help.wellnessliving.com)" },
      { slug: "balance-management", note: "Balance management — Reports & redemption workflows. (help.wellnessliving.com)" }
    ],
    "community": [
      { slug: "forums-groups", note: "Forums / groups — WellnessLiving Community Forum. (help.wellnessliving.com)" },
      { slug: "leaderboards", note: "Leaderboards — FitBUILDER leaderboards. (help.wellnessliving.com)" },
      { slug: "challenges", note: "Challenges — Rewards 'contests' in the app. (help.wellnessliving.com)" }
    ],
    "admin-and-permissions": [
      { slug: "role-based-permissions", note: "Role-based permissions — Granular staff role permissions. (help.wellnessliving.com)" },
      { slug: "audit-logs", note: "Audit logs — Edit Log tracks changes & sources. (help.wellnessliving.com)" }
    ],
    "scheduling-and-availability": [
      { slug: "staff-scheduling", note: "Staff scheduling — Working hours & schedules. (help.wellnessliving.com)" },
      { slug: "availability-rules", note: "Availability rules — Service-level approvals & policies. (help.wellnessliving.com)" }
    ],
    "compensation": [
      { slug: "commission-structures", note: "Commission structures — Automatic staff commission settings. (help.wellnessliving.com)" },
      { slug: "tips", note: "Tips — Tipping & tip receipts. (help.wellnessliving.com)" }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Contact CRM — Profiles, notes, lists & reports. (help.wellnessliving.com)" },
      { slug: "lead-capture-forms", note: "Lead capture forms — Direct URLs; embed; push/SMS/email. (help.wellnessliving.com)" }
    ],
    "campaigns": [
      { slug: "sms-marketing", note: "SMS marketing — Supported; per-SMS fees. (help.wellnessliving.com)" },
      { slug: "marketing-automation", note: "Marketing automation — Automated notifications + Growth Playbooks. (help.wellnessliving.com)" },
      { slug: "promo-codes", note: "Promo codes — Discount codes. (help.wellnessliving.com)" }
    ]
  }
},
{
  id: "vagaro",
  name: "Vagaro",
  url: "https://www.vagaro.com/",
  additionalInfo: [
    "Vagaro Pay Later (Affirm) offers 4 interest-free payments or monthly installments up to 36 months. (support.vagaro.com)",
    "Tap to Pay on Android accepts contactless cards and wallets without extra hardware. (support.vagaro.com)",
    "Check-In App with QR enables true self-check-in; staff receive real-time alerts. (support.vagaro.com)",
    "MySite website builder is deep (themes, iframe/custom HTML, GA4/Ads). (vagaro.com)",
    "APIs & Webhooks exist for custom integrations. (vagaro.com)",
    "Data Lake / Power BI template (Premium) for advanced reporting. (support.vagaro.com)"
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Website widget — Embeddable booking widget with generated HTML. (support.vagaro.com)" },
      { slug: "embedded-iframe", note: "Embedded iframe — Embeddable booking widget. (support.vagaro.com)" },
      { slug: "branded-microsite", note: "Branded microsite — MySite website builder with integrated booking. (vagaro.com)" },
      { slug: "ios-app", note: "iOS app — Consumer app for browsing & booking. (support.vagaro.com)" },
      { slug: "android-app", note: "Android app — Consumer app for browsing & booking. (support.vagaro.com)" },
      { slug: "facebook-instagram-booking", note: "Facebook/Instagram booking — Native 'Book' button integrations. (support.vagaro.com)" },
      { slug: "google-reserve", note: "Google Reserve — Booking from Google to Vagaro booking. (support.vagaro.com)" },
      { slug: "phone-in-person-entry", note: "Phone / in-person entry — Staff can book & check out in-house. (support.vagaro.com)" },
      { slug: "kiosk-self-service", note: "Kiosk / self-service — Check-In App for self-check-in/kiosk. (support.vagaro.com)" },
      { slug: "custom-portal-via-api", note: "Custom portal via API — APIs & webhooks available. (vagaro.com)" }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Drop-in / single session — Standard classes. (support.vagaro.com)" },
      { slug: "course-multi-session-series", note: "Course / multi-session series — Workshops/class series supported. (support.vagaro.com)" },
      { slug: "workshops-events", note: "Workshops / events — Supported. (support.vagaro.com)" },
      { slug: "private-1-1", note: "Private 1:1 — Private appointments. (support.vagaro.com)" },
      { slug: "semi-private-small-group", note: "Semi-private — Small-group classes. (support.vagaro.com)" },
      { slug: "virtual-live-video", note: "Virtual live (video) — Built-in livestream for classes. (vagaro.com)" },
      { slug: "on-demand-recorded-content", note: "On-demand / recorded — Sell/share video content; Vagaro Drive can host .mp4. (support.vagaro.com)" }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Recurring classes — Repeat classes supported. (support.vagaro.com)" },
      { slug: "rolling-enrollments", note: "Rolling enrollments — Can add attendees any time to future sessions. (support.vagaro.com)" },
      { slug: "fixed-date-courses", note: "Fixed-date courses — Defined workshop/class series. (support.vagaro.com)" },
      { slug: "waitlist-for-courses", note: "Waitlist for courses/classes — Waitlisted customers supported. (support.vagaro.com)" }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Capacity limit — Class attendee list shows capacity/remaining. (support.vagaro.com)" },
      { slug: "equipment-based-capacity", note: "Equipment-based capacity — Assign rooms/equipment to prevent conflicts. (support.vagaro.com)" },
      { slug: "overbooking-allowance", note: "Overbooking allowance — Double-bookings can be allowed. (support.vagaro.com)" },
      { slug: "waitlist", note: "Waitlist — Supported. (support.vagaro.com)" },
      { slug: "booking-window-open-close", note: "Booking window — Online booking rules & lead times. (support.vagaro.com)" },
      { slug: "cut-off-time-before-start", note: "Cut-off time before start — Online booking rules include lead times. (support.vagaro.com)" },
      { slug: "late-cancel-rules", note: "Late cancel rules — Policies supported; deposits help reduce no-shows. (support.vagaro.com)" },
      { slug: "no-show-fee", note: "No-show fee — Deposits/penalties supported. (support.vagaro.com)" }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Rooms/locations — Resources module. (support.vagaro.com)" },
      { slug: "equipment", note: "Equipment — Resources module. (support.vagaro.com)" },
      { slug: "instructors", note: "Instructors — Staff/resources assignment. (support.vagaro.com)" },
      { slug: "multiple-resources-per-booking", note: "Multiple resources per booking — Assign room + equipment + staff. (support.vagaro.com)" },
      { slug: "conflict-detection-prevention", note: "Conflict detection / prevention — Prevents double-booking; auto-select first available. (support.vagaro.com)" }
    ],
    "calendar-sync": [
      { slug: "google-calendar-2-way", note: "Google Calendar (2-way) — Launched two-way sync. (vagaro.com)" },
      { slug: "outlook-2-way", note: "Outlook (2-way) — can’t find information (subscription/import URL is one-way). (support.vagaro.com)" },
      { slug: "icloud-2-way", note: "iCloud (2-way) — can’t find information (subscription/import URL is one-way). (support.vagaro.com)" },
      { slug: "ics-feed-1-way", note: "ICS feed (1-way) — Export .ics and import to Google/Apple/Outlook. (support.vagaro.com)" }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Staff check-in — Mark attendance/no-show. (support.vagaro.com)" },
      { slug: "mobile-app-check-in", note: "Mobile/Kiosk check-in — Check-In App on tablet/desktop. (support.vagaro.com)" },
      { slug: "kiosk-ipad-check-in", note: "Kiosk / iPad check-in — Check-In App. (support.vagaro.com)" },
      { slug: "qr-code-barcode-scanning", note: "QR code / barcode scanning — Member QR + hardware scanners. (support.vagaro.com)" },
      { slug: "nfc-rfid", note: "NFC/RFID — can’t find information." },
      { slug: "turnstile-door-access-integration", note: "Turnstile/door access — can’t find information." }
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "Custom intake forms — Robust form builder. (vagaro.com)" },
      { slug: "custom-fields", note: "Custom fields — Supported in forms. (vagaro.com)" },
      { slug: "e-sign-waivers", note: "E-sign waivers / agreements — Forms used for waivers/consent. (support.vagaro.com)" },
      { slug: "health-screening", note: "Health screening — Supported via form templates. (Google Play)" },
      { slug: "parental-consent", note: "Parental consent — Supported via templates. (Google Play)" },
      { slug: "photo-video-consent", note: "Photo/video consent — Supported via templates. (Google Play)" },
      { slug: "per-class-forms", note: "Per-class forms — Make forms mandatory when booking. (support.vagaro.com)" },
      { slug: "conditional-logic", note: "Conditional logic — can’t find information." }
    ],
    "booking-models": [
      { slug: "account-required", note: "Account required — Online booking typically uses customer accounts. (support.vagaro.com)" },
      { slug: "guest-checkout", note: "Guest checkout — can’t find information." },
      { slug: "family-group-bookings", note: "Family / group bookings — Family & Friends lets patrons book/pay/share for others. (support.vagaro.com)" },
      { slug: "corporate-team-bookings", note: "Corporate / team bookings — can’t find information." },
      { slug: "multi-attendee-in-one-booking", note: "Multi-attendee in one booking — can’t find information (staff can register multiple attendees; customer multi-add not confirmed). (support.vagaro.com)" },
      { slug: "add-on-upsells-at-checkout", note: "Add-on upsells at checkout — Add-ons for services/classes. (support.vagaro.com)" }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Email reminders — Automated email notifications. (support.vagaro.com)" },
      { slug: "sms-reminders", note: "SMS reminders — Automated text notifications. (support.vagaro.com)" },
      { slug: "push-notifications", note: "Push notifications — Via customer app. (support.vagaro.com)" },
      { slug: "two-way-sms", note: "Two-way SMS — Connect by Vagaro enables messaging with customers. (support.vagaro.com)" },
      { slug: "whatsapp-notifications", note: "WhatsApp notifications — can’t find information." }
    ],
    "payment-gateways": [
      { slug: "stripe", note: "Stripe — can’t find information (Vagaro markets its own processing). (vagaro.com)" },
      { slug: "paypal", note: "PayPal — can’t find information." },
      { slug: "square", note: "Square — can’t find information." },
      { slug: "adyen", note: "Adyen — can’t find information." },
      { slug: "braintree", note: "Braintree — can’t find information." },
      { slug: "authorize-net", note: "Authorize.Net — can’t find information." },
      { slug: "worldpay", note: "Worldpay — can’t find information." },
      { slug: "mollie", note: "Mollie — can’t find information." },
      { slug: "razorpay", note: "Razorpay — can’t find information." },
      { slug: "paystack", note: "Paystack — can’t find information." },
      { slug: "payu", note: "PayU — can’t find information." },
      { slug: "mercado-pago", note: "Mercado Pago — can’t find information." },
      { slug: "2checkout", note: "2Checkout — can’t find information." },
      { slug: "checkout-com", note: "Checkout.com — can’t find information." },
      { slug: "klarna-payments", note: "Klarna — can’t find information." }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Cards (Visa/Mastercard/Amex/Discover) — Via Vagaro Payments. (vagaro.com)" },
      { slug: "apple-pay", note: "Apple Pay — Supported. (support.vagaro.com)" },
      { slug: "google-pay", note: "Google Pay — Supported. (support.vagaro.com)" },
      { slug: "buy-now-pay-later-afterpay-clearpay-klarna-affirm", note: "Buy Now Pay Later — Via Affirm (Vagaro Pay Later). (support.vagaro.com)" },
      { slug: "cash", note: "Cash — Accepted at checkout. (support.vagaro.com)" },
      { slug: "cheque", note: "Cheque — Accepted at checkout. (support.vagaro.com)" },
      { slug: "gift-cards", note: "Gift cards — Digital & physical supported. (support.vagaro.com)" }
    ],
    "point-of-sale-in-person": [
      { slug: "card-reader", note: "Card reader / Terminals — PayPro, readers, etc. (vagaro.com)" },
      { slug: "tap-to-pay-on-iphone-android", note: "Tap to Pay on Android — Supported; no reader needed. (support.vagaro.com)" },
      { slug: "cash-drawer", note: "Cash drawer — Sold by Vagaro. (vagaro.com)" },
      { slug: "receipt-printer", note: "Receipt printer — Sold by Vagaro. (vagaro.com)" },
      { slug: "barcode-scanner", note: "Barcode scanner — Sold by Vagaro. (vagaro.com)" }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Single class — Standard. (support.vagaro.com)" },
      { slug: "class-packs-punch-cards", note: "Class packs / punch cards — Packages for class visits. (support.vagaro.com)" },
      { slug: "memberships-subscriptions", note: "Memberships / subscriptions — Auto-renewing memberships. (support.vagaro.com)" }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Recurring billing — Weekly/monthly/quarterly/annually. (vagaro.com)" },
      { slug: "deposits", note: "Deposits — Require deposit for classes/services. (YouTube/support)" },
      { slug: "partial-payments", note: "Partial payments — Split across cards/cash/gift cards. (support.vagaro.com)" },
      { slug: "split-payments", note: "Split payments — Supported at checkout. (support.vagaro.com)" },
      { slug: "installments", note: "Installments — Via Affirm/Pay Later. (support.vagaro.com)" }
    ],
    "taxes-and-invoicing": [
      { slug: "vat-gst-hst", note: "VAT/GST/HST — Configurable (multi-rate). (support.vagaro.com)" },
      { slug: "multiple-tax-rates", note: "Multiple tax rates — Supported. (support.vagaro.com)" },
      { slug: "tax-inclusive-exclusive", note: "Tax inclusive/exclusive — Supported. (support.vagaro.com)" },
      { slug: "invoices", note: "Invoices — Create, send, pay online. (support.vagaro.com)" }
    ],
    "discounts-and-credits": [
      { slug: "coupon-codes", note: "Coupon codes / Promo codes — Include codes in notification templates. (support.vagaro.com)" },
      { slug: "referral-discounts", note: "Referral discounts — Points for referrals; redeem at checkout. (support.vagaro.com)" },
      { slug: "loyalty-points-redemption", note: "Loyalty points redemption — Earn on purchases/reviews/referrals; redeem for services/classes/products. (support.vagaro.com)" },
      { slug: "gift-cards", note: "Gift cards — Digital & physical; balance management reports. (support.vagaro.com)" }
    ],
    "risk-and-compliance": [
      { slug: "pci-dss-compliance", note: "PCI DSS — Compliance efforts stated. (support.vagaro.com)" },
      { slug: "chargeback-management", note: "Chargeback management — View/dispute process; regional fees listed. (support.vagaro.com)" },
      { slug: "risk-scoring-fraud-checks", note: "Fraud checks — Monitoring & reversal of fraudulent gift-card purchases. (support.vagaro.com)" }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Family accounts — Family & Friends (share memberships/packages, book/pay for others). (support.vagaro.com)" },
      { slug: "medical-notes", note: "Medical notes — SOAP notes & health docs per customer. (support.vagaro.com)" },
      { slug: "tags-segments", note: "Tags / segments — Customer tagging (e.g., VIP). (support.vagaro.com)" }
    ],
    "memberships": [
      { slug: "contract-terms", note: "Contract terms — Handled via forms/agreements. (support.vagaro.com)" },
      { slug: "freezes-holds", note: "Freezes / holds — Pause & resume. (support.vagaro.com)" },
      { slug: "carryover-rules", note: "Carryover rules — 'Carry Balance Forward' option. (support.vagaro.com)" },
      { slug: "usage-limits", note: "Usage limits — Configure benefits/visit counts. (support.vagaro.com)" },
      { slug: "access-control-by-membership", note: "Access control by membership — Require membership to book at Check-In kiosk. (support.vagaro.com)" }
    ],
    "passes": [
      { slug: "class-packs", note: "Class packs — Packages for class visits. (support.vagaro.com)" },
      { slug: "expiration-rules", note: "Expiration rules — Time-based or auto-renew cycles. (support.vagaro.com)" },
      { slug: "shareable-passes", note: "Shareable passes — Share via Family & Friends. (support.vagaro.com)" }
    ],
    "loyalty-and-referral": [
      { slug: "points", note: "Points — Earn on purchases/reviews/referrals. (support.vagaro.com)" },
      { slug: "referrals", note: "Referrals — Points for referrals. (support.vagaro.com)" }
    ],
    "gift-cards": [
      { slug: "digital-gift-cards", note: "Digital gift cards — Sell/redeem/print; balance reports. (support.vagaro.com)" },
      { slug: "physical-gift-cards", note: "Physical gift cards — Sell/redeem; balance reports. (support.vagaro.com)" },
      { slug: "balance-management", note: "Balance management — Reports to manage balances. (support.vagaro.com)" }
    ],
    "admin-and-permissions": [
      { slug: "role-based-permissions", note: "Role-based permissions — Access levels & granular permissions. (support.vagaro.com)" }
    ],
    "scheduling-and-availability": [
      { slug: "staff-scheduling", note: "Staff scheduling — Calendar + online appointment rules. (support.vagaro.com)" },
      { slug: "availability-rules", note: "Availability rules — Lead times, availability display, gap minimization. (support.vagaro.com)" },
      { slug: "time-off", note: "Time-off — Rich policies & approvals (with Payroll). (support.vagaro.com)" }
    ],
    "compensation": [
      { slug: "payroll-export", note: "Payroll report/export — Calculation & history reports. (support.vagaro.com)" },
      { slug: "commission-structures", note: "Commission structures — Tiered by revenue & by service. (support.vagaro.com)" },
      { slug: "tips", note: "Tips — Tipping supported; split tips at checkout. (support.vagaro.com)" },
      { slug: "tip-pools", note: "Tip pools — Split tips at checkout. (support.vagaro.com)" },
      { slug: "performance-dashboards", note: "Performance dashboards — Reporting across sales/appointments. (vagaro.com)" }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Contact CRM — Profiles, notes, cards on file, points. (support.vagaro.com)" },
      { slug: "lead-capture-forms", note: "Lead capture forms — Via Forms embedded on MySite/website. (support.vagaro.com)" }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Email marketing — One-time & automated (birthdays, post-visit). (vagaro.com)" },
      { slug: "sms-marketing", note: "SMS marketing — Text blasts & campaigns. (support.vagaro.com)" },
      { slug: "marketing-automation", note: "Marketing automation — Automated email triggers. (vagaro.com)" },
      { slug: "promo-codes", note: "Promo codes — Include codes in templates. (support.vagaro.com)" },
      { slug: "landing-pages", note: "Landing pages — MySite pages. (vagaro.com)" },
      { slug: "seo-tools", note: "SEO tools — GA4 & Search Console integration. (vagaro.com)" }
    ],
    "ads-and-tracking": [
      { slug: "google-ads-conversion", note: "Google Ads conversion / GA4 — Direct MySite integration. (support.vagaro.com)" },
      { slug: "facebook-ads-pixel", note: "Facebook/Meta Pixel — Add via custom HTML on MySite. (support.vagaro.com)" }
    ]
  }
}, {
  id: "zenoti",
  name: "Zenoti",
  url: "https://www.zenoti.com/",
  additionalInfo: [
    "Omni-channel guest messaging via ezConnect/HyperConnect (SMS, WhatsApp, FB Messenger, web chat; automation & 2-way). (help.zenoti.com)",
    "Access control: Gantner integration for RFID/NFC wearables, turnstiles/door access, and automated check-ins. (help.zenoti.com)",
    "BNPL breadth: Affirm/Clearpay(Klarna)/Afterpay via Stripe Express, plus Sunbit. (help.zenoti.com)",
    "Zenoti Payments supports both Adyen and Stripe/Stripe Express (varies by region/use case). (help.zenoti.com)",
    "Self-checkout/auto-pay in the consumer app (store card, tip, pay on phone). (help.zenoti.com)",
    "Advanced analytics/tracking on Webstore & Kiosk (GTM/GA, Pixel, data layer, custom domains). (help.zenoti.com)",
    "Multi-currency & cross-currency awareness incl. group invoices & dispute handling. (help.zenoti.com)",
    "Integrated payroll + employee Smart Card for same-day tips/payouts (Apple/Google Wallet). (help.zenoti.com)"
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "branded-microsite", note: "Branded microsite (Webstore V2). (Zenoti)" },
      { slug: "ios-app", note: "iOS app (consumer). (Zenoti)" },
      { slug: "android-app", note: "Android app (consumer). (Zenoti)" },
      { slug: "facebook-instagram-booking", note: "Facebook/Instagram booking. (Zenoti)" },
      { slug: "google-reserve", note: "Reserve with Google. (Zenoti)" },
      { slug: "phone-in-person-entry", note: "Phone / in-person entry. (Zenoti)" },
      { slug: "kiosk-self-service", note: "Kiosk / self-service. (Zenoti)" },
      { slug: "website-widget", note: "Website widget — can’t find information." },
      { slug: "embedded-iframe", note: "Embedded iframe — can’t find information." },
      { slug: "custom-portal-via-api", note: "Custom portal via API — can’t find information." }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Drop-in / single session (Classes). (help.zenoti.com)" },
      { slug: "workshops-events", note: "Workshops / events. (help.zenoti.com)" }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Recurring classes. (help.zenoti.com)" },
      { slug: "waitlist-for-courses", note: "Waitlist for courses — can’t find information." },
      { slug: "fixed-date-courses", note: "Fixed-date courses — can’t find information." },
      { slug: "rolling-enrollments", note: "Rolling enrollments — can’t find information." }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Capacity limit. (help.zenoti.com)" },
      { slug: "waitlist", note: "Waitlist for classes. (help.zenoti.com)" },
      { slug: "overbooking-allowance", note: "Overbooking allowance setting. (help.zenoti.com)" },
      { slug: "buffer-times-between-classes", note: "Buffer times between classes/appointments. (help.zenoti.com)" },
      { slug: "late-cancel-rules", note: "Late cancel rules. (help.zenoti.com)" },
      { slug: "no-show-fee", note: "No-show fee rules. (help.zenoti.com)" }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Rooms/locations. (help.zenoti.com)" },
      { slug: "equipment", note: "Equipment. (help.zenoti.com)" },
      { slug: "instructors", note: "Instructors. (help.zenoti.com)" },
      { slug: "multiple-resources-per-booking", note: "Multiple resources per booking (assign room & instructor on a class). (help.zenoti.com)" },
      { slug: "conflict-detection-prevention", note: "Conflict detection / prevention. (help.zenoti.com)" }
    ],
    "calendar-sync": [
      { slug: "ics-feed-1-way", note: "ICS (calendar link) for personal calendars (1-way) for staff/guests. (help.zenoti.com)" },
      { slug: "google-calendar-2-way", note: "Google Calendar (2-way) — can’t find information." },
      { slug: "outlook-2-way", note: "Outlook (2-way) — can’t find information." },
      { slug: "icloud-2-way", note: "iCloud (2-way) — can’t find information." }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Staff/Student check-in (Roster). (help.zenoti.com)" },
      { slug: "mobile-app-check-in", note: "Mobile app self-check-in (CMA). (help.zenoti.com)" },
      { slug: "kiosk-ipad-check-in", note: "Kiosk / iPad check-in. (help.zenoti.com)" },
      { slug: "qr-code-barcode-scanning", note: "QR code / barcode scanning. (help.zenoti.com)" },
      { slug: "nfc-rfid", note: "NFC / RFID supported (via Gantner). (help.zenoti.com)" },
      { slug: "turnstile-door-access-integration", note: "Turnstile/door access (Gantner integration). (help.zenoti.com)" }
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "Custom intake forms (Form Builder). (help.zenoti.com)" },
      { slug: "custom-fields", note: "Custom fields. (help.zenoti.com)" },
      { slug: "e-sign-waivers", note: "E-sign waivers/agreements. (help.zenoti.com)" },
      { slug: "health-screening", note: "Health screening template example. (help.zenoti.com)" },
      { slug: "per-class-forms", note: "Per-class forms. (help.zenoti.com)" }
    ],
    "booking-models": [
      { slug: "guest-checkout", note: "Guest checkout (Webstore 'Continue as Guest'). (help.zenoti.com)" },
      { slug: "family-group-bookings", note: "Family/group bookings (Kiosk). (help.zenoti.com)" },
      { slug: "multi-attendee-in-one-booking", note: "Multi-attendee in one booking (group invoice/bill). (help.zenoti.com)" }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Email reminders. (help.zenoti.com)" },
      { slug: "sms-reminders", note: "SMS reminders. (help.zenoti.com)" },
      { slug: "push-notifications", note: "Push notifications (CMA & ZMA). (help.zenoti.com)" },
      { slug: "whatsapp-notifications", note: "WhatsApp notifications. (help.zenoti.com)" },
      { slug: "two-way-sms", note: "Two-way SMS/omni-channel inbox (ezConnect). (help.zenoti.com)" },
      { slug: "custom-templates", note: "Custom templates. (help.zenoti.com)" }
    ],
    "payment-gateways": [
      { slug: "adyen", note: "Zenoti Payments (powered by Adyen). (help.zenoti.com)" },
      { slug: "stripe", note: "Zenoti Payments (Stripe/Stripe Express). (help.zenoti.com)" },
      { slug: "klarna-payments", note: "BNPL providers via Stripe Express: Klarna. (help.zenoti.com)" },
      { slug: "afterpay", note: "BNPL via Stripe Express: Afterpay/Clearpay. (help.zenoti.com)" },
      { slug: "affirm", note: "BNPL via Stripe Express: Affirm. (help.zenoti.com)" },
      { slug: "sunbit", note: "Sunbit BNPL (Adyen or Stripe Express path). (help.zenoti.com)" }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Credit/Debit cards. (help.zenoti.com)" },
      { slug: "apple-pay", note: "Apple Pay. (help.zenoti.com)" },
      { slug: "google-pay", note: "Google (Android) Pay. (help.zenoti.com)" },
      { slug: "samsung-pay", note: "Samsung Pay. (help.zenoti.com)" },
      { slug: "buy-now-pay-later-afterpay-clearpay-klarna-affirm", note: "BNPL (Affirm / Afterpay / Clearpay / Klarna / Sunbit). (help.zenoti.com)" },
      { slug: "ach-debit", note: "ACH (US) direct debit. (help.zenoti.com)" },
      { slug: "sepa-direct-debit", note: "SEPA (EU) direct debit. (help.zenoti.com)" },
      { slug: "ideal", note: "iDEAL (NL). (help.zenoti.com)" },
      { slug: "cash", note: "Cash. (help.zenoti.com)" },
      { slug: "payment-links", note: "Payment links (with AVS). (help.zenoti.com)" }
    ],
    "point-of-sale-in-person": [
      { slug: "card-reader", note: "Card reader support (BBPOS/Verifone, etc.). (help.zenoti.com)" },
      { slug: "cash-drawer", note: "Cash drawer. (help.zenoti.com)" },
      { slug: "receipt-printer", note: "Receipt printer. (help.zenoti.com)" },
      { slug: "barcode-scanner", note: "Barcode scanner. (help.zenoti.com)" }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Single class (priced on class). (help.zenoti.com)" },
      { slug: "class-packs-punch-cards", note: "Class packs / punch cards (Series packages). (help.zenoti.com)" },
      { slug: "memberships-subscriptions", note: "Memberships / subscriptions. (help.zenoti.com)" },
      { slug: "intro-offers", note: "Intro offers (one-time offers for memberships/packages). (help.zenoti.com)" }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Recurring billing (memberships). (help.zenoti.com)" },
      { slug: "proration", note: "Proration (upgrade/downgrade; cancel with proration). (help.zenoti.com)" },
      { slug: "dunning-retry-logic", note: "Dunning / retry logic. (help.zenoti.com)" },
      { slug: "partial-payments", note: "Partial payments (incl. via payment links & gift cards). (help.zenoti.com)" },
      { slug: "deposits", note: "Deposits supported. (help.zenoti.com)" },
      { slug: "installments", note: "Installments (BNPL). (help.zenoti.com)" }
    ],
    "taxes-and-invoicing": [
      { slug: "vat-gst-hst", note: "VAT/GST support incl. country-specific GST. (help.zenoti.com)" },
      { slug: "multiple-tax-rates", note: "Multiple tax rates (Tax groups/components). (help.zenoti.com)" },
      { slug: "tax-inclusive-exclusive", note: "Tax inclusive/exclusive. (help.zenoti.com)" },
      { slug: "fiscal-receipts", note: "Fiscal receipts (GST formats). (help.zenoti.com)" },
      { slug: "quotes", note: "Quotes. (help.zenoti.com)" },
      { slug: "invoices", note: "Invoices. (help.zenoti.com)" },
      { slug: "purchase-orders", note: "Purchase orders. (help.zenoti.com)" }
    ],
    "discounts-and-credits": [
      { slug: "coupon-codes", note: "Coupon codes / Discount vouchers. (help.zenoti.com)" },
      { slug: "auto-discounts", note: "Auto-discounts (Advanced Marketing). (help.zenoti.com)" },
      { slug: "referral-discounts", note: "Referral discounts/rewards. (help.zenoti.com)" },
      { slug: "loyalty-points-redemption", note: "Loyalty points redemption. (help.zenoti.com)" },
      { slug: "gift-cards", note: "Gift cards (digital & physical). (help.zenoti.com)" },
      { slug: "store-credit", note: "Store credit (prepaid cards). (help.zenoti.com)" }
    ],
    "risk-and-compliance": [
      { slug: "3-d-secure-sca", note: "3-D Secure / SCA (EU). (help.zenoti.com)" },
      { slug: "pci-dss-compliance", note: "PCI DSS (controls & SAQ). (help.zenoti.com)" },
      { slug: "avs", note: "AVS / Address verification. (help.zenoti.com)" },
      { slug: "chargeback-management", note: "Chargeback management (disputes). (help.zenoti.com)" }
    ],
    "currency": [
      { slug: "multi-currency-pricing", note: "Multi-currency (register & group invoices). (help.zenoti.com)" }
    ],
    "profiles": [
      { slug: "tags-segments", note: "Tags / segments (target segments). (help.zenoti.com)" }
    ],
    "memberships": [
      { slug: "cancellation-policies", note: "Membership cancellation policies/rules. (help.zenoti.com)" }
    ],
    "passes": [
      { slug: "class-packs", note: "Class packs (Series packages). (help.zenoti.com)" },
      { slug: "expiration-rules", note: "Expiration rules. (help.zenoti.com)" },
      { slug: "transfer-rules", note: "Transfer rules (transfer credits). (help.zenoti.com)" }
    ],
    "loyalty-and-referral": [
      { slug: "points", note: "Points. (help.zenoti.com)" },
      { slug: "tiers", note: "Tiers. (help.zenoti.com)" },
      { slug: "referrals", note: "Referrals. (help.zenoti.com)" }
    ],
    "gift-cards": [
      { slug: "digital-gift-cards", note: "Digital gift cards. (help.zenoti.com)" },
      { slug: "physical-gift-cards", note: "Physical gift cards. (help.zenoti.com)" }
    ],
    "community": [
      { slug: "challenges", note: "Challenges feature (referenced in notification macros). (help.zenoti.com)" }
    ],
    "admin-and-permissions": [
      { slug: "role-based-permissions", note: "Role-based permissions. (help.zenoti.com)" }
    ],
    "scheduling-and-availability": [
      { slug: "staff-scheduling", note: "Staff scheduling. (help.zenoti.com)" },
      { slug: "availability-rules", note: "Availability rules (conflict prevention). (help.zenoti.com)" }
    ],
    "compensation": [
      { slug: "commission-structures", note: "Commission structures. (help.zenoti.com)" },
      { slug: "tips", note: "Tips. (help.zenoti.com)" }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Contact CRM (guest profiles/notes). (help.zenoti.com)" }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Email marketing. (help.zenoti.com)" },
      { slug: "sms-marketing", note: "SMS marketing. (help.zenoti.com)" },
      { slug: "marketing-automation", note: "Marketing automation (Always-on & advanced). (help.zenoti.com)" },
      { slug: "promo-codes", note: "Promo codes. (help.zenoti.com)" }
    ],
    "ads-and-tracking": [
      { slug: "facebook-ads-pixel", note: "Facebook Ads pixel. (help.zenoti.com)" },
      { slug: "google-ads-conversion", note: "Google Ads conversion tracking (via GTM/GA); end-to-end Webstore tracking. (help.zenoti.com)" }
    ]
  }
},
{
  id: "goteamup",
  name: "GoTeamUp",
  url: "https://goteamup.com/",
  additionalInfo: [
    "Connected POS with Stripe Terminal (Reader S700 / BBPOS WisePOS E). (goteamup.com)",
    "Access control via Kisi (mobile credentials/readers). (goteamup.com)",
    "Flexible Payment Plans: commitments, split/instalment options, joining fees. (support.goteamup.com)",
    "Lead Management: capture widgets, source tracking, automated follow-ups. (support.goteamup.com)",
    "On-Demand Content hosted in Member App & Customer Site. (goteamup.com)",
    "Donation-based (pay-what-you-want) classes. (support.goteamup.com)",
    "Two-way Google Calendar sync for staff (+ iCal/Outlook via feed). (support.goteamup.com)",
    "New Member App (Sep 30, 2025): membership mgmt, payments, family, calendar sync. (support.goteamup.com)",
    "Community Happiness (reputation management) for reviews. (goteamup.com)"
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Website widget / Embedded iframe. (support.goteamup.com)" },
      { slug: "embedded-iframe", note: "Embedded iframe fallback guides. (support.goteamup.com)" },
      { slug: "branded-microsite", note: "Hosted Customer Site. (support.goteamup.com)" },
      { slug: "ios-app", note: "Member App (iOS). (goteamup.com)" },
      { slug: "android-app", note: "Member App (Android). (goteamup.com)" },
      { slug: "facebook-instagram-booking", note: "Indirect via action button/link to Customer Site. (support.goteamup.com)" },
      { slug: "phone-in-person-entry", note: "Staff sell memberships/registrations & take payment in-person. (support.goteamup.com)" },
      { slug: "kiosk-self-service", note: "Self check-in kiosk. (support.goteamup.com)" },
      { slug: "custom-portal-via-api", note: "Business & Customer APIs. (goteamup.com)" }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Drop-ins (via 1-use pack/fee). (support.goteamup.com)" },
      { slug: "course-multi-session-series", note: "Courses with multi-session management. (support.goteamup.com)" },
      { slug: "workshops-events", note: "Workshops/events supported. (goteamup.com)" },
      { slug: "private-1-1", note: "Appointments (1:1). (beta-verify.goteamup.com)" },
      { slug: "semi-private-small-group", note: "Small group (appointments/classes with capacity). (beta-verify.goteamup.com)" },
      { slug: "virtual-live-video", note: "Zoom integration. (goteamup.com)" },
      { slug: "on-demand-recorded-content", note: "On-Demand videos. (goteamup.com)" }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Recurring classes. (support.goteamup.com)" },
      { slug: "fixed-date-courses", note: "Fixed-date courses. (support.goteamup.com)" },
      { slug: "waitlist-for-courses", note: "Waitlists for courses/classes supported. (goteamup.com)" }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Capacity limit. (goteamup.com)" },
      { slug: "waitlist", note: "Waitlist. (goteamup.com)" },
      { slug: "auto-promotion-from-waitlist", note: "Auto-promotion from waitlist. (goteamup.com)" },
      { slug: "booking-window-open-close", note: "Registration timelines / priority access. (support.goteamup.com)" },
      { slug: "cut-off-time-before-start", note: "Cut-off & cancellation settings. (support.goteamup.com)" },
      { slug: "late-cancel-rules", note: "Late cancel rules. (support.goteamup.com)" },
      { slug: "no-show-fee", note: "No-show fee/penalty tools. (goteamup.com)" }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Venues/locations in scheduling & access control. (goteamup.com)" },
      { slug: "instructors", note: "Assign staff to classes/appointments. (beta-verify.goteamup.com)" }
    ],
    "calendar-sync": [
      { slug: "google-calendar-2-way", note: "Google Calendar (2-way). (support.goteamup.com)" },
      { slug: "ics-feed-1-way", note: "ICS feed (1-way) for iCal/Outlook/Google. (support.goteamup.com)" }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Mark attended/no-show from admin. (support.goteamup.com)" },
      { slug: "kiosk-ipad-check-in", note: "Kiosk check-in. (support.goteamup.com)" },
      { slug: "qr-code-barcode-scanning", note: "Barcode supported with kiosk/scanner. (support.goteamup.com)" },
      { slug: "nfc-rfid", note: "NFC/RFID via Kisi access control. (goteamup.com)" },
      { slug: "turnstile-door-access-integration", note: "Door/turnstile via Kisi. (goteamup.com)" }
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "Custom intake forms. (support.goteamup.com)" },
      { slug: "e-sign-waivers", note: "Digital waivers. (goteamup.com)" },
      { slug: "per-class-forms", note: "Forms tied to classes/courses/appointments. (support.goteamup.com)" }
    ],
    "booking-models": [
      { slug: "account-required", note: "Customer accounts + invite/claim flow. (support.goteamup.com)" },
      { slug: "family-group-bookings", note: "Family management & Membership Sharing. (support.goteamup.com)" },
      { slug: "multi-attendee-in-one-booking", note: "Multi-attendee ('one-plus pricing'). (Teamup.com)" }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Customisable email notifications. (peloton-proxy.goteamup.com)" },
      { slug: "sms-reminders", note: "SMS add-on (confirmations, changes, waitlist). (support.goteamup.com)" },
      { slug: "push-notifications", note: "Push via Member App & Custom Branded App. (goteamup.com)" },
      { slug: "automated-waitlist-messages", note: "Automated waitlist updates (SMS/email). (support.goteamup.com)" }
    ],
    "payment-gateways": [
      { slug: "stripe", note: "Stripe core integration. (goteamup.com)" },
      { slug: "gocardless", note: "GoCardless direct debit. (goteamup.com)" },
      { slug: "paypal", note: "PayPal supported. (beta-verify.goteamup.com)" },
      { slug: "paysimple", note: "PaySimple supported. (beta-verify.goteamup.com)" },
      { slug: "braintree", note: "Braintree supported. (beta-verify.goteamup.com)" },
      { slug: "paysafe", note: "Paysafe supported. (beta-verify.goteamup.com)" }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Cards via Stripe (brand lists by region). (support.goteamup.com)" },
      { slug: "apple-pay", note: "Apple Pay (web & Terminal wallets). (support.goteamup.com)" },
      { slug: "google-pay", note: "Google Pay. (support.goteamup.com)" },
      { slug: "samsung-pay", note: "Samsung Pay on terminals. (goteamup.com)" },
      { slug: "bank-transfer", note: "Bank/Direct Debit via GoCardless (SEPA/ACH). (goteamup.com)" },
      { slug: "sepa-direct-debit", note: "SEPA Direct Debit (GoCardless). (goteamup.com)" },
      { slug: "ach-debit", note: "ACH Debit (GoCardless). (goteamup.com)" },
      { slug: "cash", note: "Cash (offline & invoice workflows). (support.goteamup.com)" },
      { slug: "cheque", note: "Cheque (offline). (support.goteamup.com)" }
    ],
    "point-of-sale-in-person": [
      { slug: "card-reader", note: "Stripe Reader S700 / BBPOS WisePOS E integrated to TeamUp POS. (support.goteamup.com)" }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Single class / drop-in. (support.goteamup.com)" },
      { slug: "class-packs-punch-cards", note: "Packs with usage & expiry. (support.goteamup.com)" },
      { slug: "memberships-subscriptions", note: "Recurring memberships w/ Payment Plans. (support.goteamup.com)" },
      { slug: "free-trials", note: "Free trials supported. (support.goteamup.com)" },
      { slug: "pay-what-you-want", note: "Donation-based classes (pay-what-you-want). (support.goteamup.com)" }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Recurring billing. (support.goteamup.com)" },
      { slug: "proration", note: "Proration (initial partial periods; holds auto-prorate). (support.goteamup.com)" },
      { slug: "dunning-retry-logic", note: "Failed payment flow & retries. (support.goteamup.com)" },
      { slug: "installments", note: "Installments & split payments via Payment Plans. (support.goteamup.com)" }
    ],
    "taxes-and-invoicing": [
      { slug: "vat-gst-hst", note: "Custom taxes/fees. (support.goteamup.com)" },
      { slug: "multiple-tax-rates", note: "Multiple tax rates. (support.goteamup.com)" },
      { slug: "tax-inclusive-exclusive", note: "Tax inclusive/exclusive (calculator & price-grossing). (support.goteamup.com)" },
      { slug: "invoices", note: "Invoices & account credit workflow. (support.goteamup.com)" }
    ],
    "discounts-and-credits": [
      { slug: "coupon-codes", note: "Rich discount code tooling (bulk, per-class overrides). (support.goteamup.com)" },
      { slug: "referral-discounts", note: "Referral program issues account credit. (support.goteamup.com)" },
      { slug: "gift-cards", note: "Gift cards create account credit; full balance management. (support.goteamup.com)" }
    ],
    "risk-and-compliance": [
      { slug: "3-d-secure-sca", note: "SCA via Stripe. (support.goteamup.com)" },
      { slug: "pci-dss-compliance", note: "Tokenized via processors; TeamUp doesn’t store card details. (goteamup.com)" }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Family accounts & membership sharing. (support.goteamup.com)" },
      { slug: "emergency-contacts", note: "Emergency contacts via forms/imports. (support.goteamup.com)" },
      { slug: "medical-notes", note: "PAR-Q/medical via forms/imports. (support.goteamup.com)" },
      { slug: "tags-segments", note: "Customer groups & filters (priority booking, reports). (support.goteamup.com)" }
    ],
    "memberships": [
      { slug: "contract-terms", note: "Minimum commitment via Payment Plans. (support.goteamup.com)" },
      { slug: "freezes-holds", note: "Holds with automated proration. (support.goteamup.com)" },
      { slug: "cancellation-policies", note: "Membership cancellation settings. (support.goteamup.com)" },
      { slug: "usage-limits", note: "Pack & membership usage limits. (support.goteamup.com)" },
      { slug: "access-control-by-membership", note: "Door access rules by membership/registrations (Kisi). (goteamup.com)" }
    ],
    "passes": [
      { slug: "class-packs", note: "Class packs. (support.goteamup.com)" },
      { slug: "expiration-rules", note: "Configurable duration & bulk extend. (support.goteamup.com)" },
      { slug: "shareable-passes", note: "Shareable via family membership sharing. (support.goteamup.com)" },
      { slug: "transfer-rules", note: "Transfer memberships between customers. (support.goteamup.com)" }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Customer records, activity feed, reports. (support.goteamup.com)" },
      { slug: "lead-capture-forms", note: "Lead Management w/ forms, sources & automated follow-ups. (support.goteamup.com)" }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Email via integrations/exports; in-app notifications. (support.goteamup.com)" },
      { slug: "sms-marketing", note: "Broadcast & automated SMS add-on. (support.goteamup.com)" },
      { slug: "marketing-automation", note: "Via Zapier & notifications. (goteamup.com)" },
      { slug: "promo-codes", note: "Discount codes. (support.goteamup.com)" }
    ]
  }
},
{
  id: "gymmaster",
  name: "GymMaster",
  url: "https://www.gymmaster.com/",
  additionalInfo: [
    "Native 24/7 door access control (RFID key tags, Bluetooth mobile access, QR), plus tailgating detection. (GymMaster)",
    "Targeted waitlist flow (claim-to-confirm) to reduce accidental auto-promotions. (GymMaster)",
    "APIs beyond bookings (Gatekeeper/Reporting) for custom portals, hardware, KPIs. (GymMaster)",
    "Wide global payment coverage (GoCardless, Braintree, Worldpay for Platforms, Paystack, etc.). (GymMaster)",
    "Kiosk & contactless flows: dynamic on-screen QR; printable static QR w/ geofence/expiry. (help.gymmaster.com)"
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Embeddable online timetable & booking widgets. (GymMaster)" },
      { slug: "embedded-iframe", note: "Online Module embedded in your website. (GymMaster)" },
      { slug: "branded-microsite", note: "Hosted Member Portal. (GymMaster)" },
      { slug: "ios-app", note: "Member App (iOS). (GymMaster)" },
      { slug: "android-app", note: "Member App (Android). (GymMaster)" },
      { slug: "phone-in-person-entry", note: "Staff can book/check-in from any device. (GymMaster)" },
      { slug: "kiosk-self-service", note: "Kiosk check-in & quick signup via QR. (help.gymmaster.com)" },
      { slug: "custom-portal-via-api", note: "Public APIs incl. Member Portal API & Gatekeeper API. (GymMaster)" }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Standard class bookings. (help.gymmaster.com)" },
      { slug: "workshops-events", note: "Events/workshops common via classes. (GymMaster)" },
      { slug: "private-1-1", note: "Services for one-on-one sessions. (help.gymmaster.com)" },
      { slug: "semi-private-small-group", note: "Small-group services (e.g., 2–4 clients). (help.gymmaster.com)" },
      { slug: "virtual-live-video", note: "Zoom integration. (GymMaster)" }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Recurring timetables. (GymMaster)" },
      { slug: "waitlist-for-courses", note: "Waitlist (confirm-to-claim) for classes; courses not distinct. (GymMaster)" }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Max participants per class. (help.gymmaster.com)" },
      { slug: "overbooking-allowance", note: "Overbooking via concession packs (class overbook not explicit). (help.gymmaster.com)" },
      { slug: "waitlist", note: "Waitlist with targeted claim window. (GymMaster)" },
      { slug: "auto-promotion-from-waitlist", note: "Legacy auto-add described; new flow uses confirm-to-claim. (GymMaster)" },
      { slug: "late-cancel-rules", note: "Cancel/no-show modals & charges. (GymMaster)" },
      { slug: "no-show-fee", note: "No-show handling with tasks/charges. (GymMaster)" }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Facilities (rooms/areas). (GymMaster)" },
      { slug: "instructors", note: "Staff/trainers as bookable resources. (GymMaster)" },
      { slug: "conflict-detection-prevention", note: "Roster change warnings for booking conflicts. (GymMaster)" }
    ],
    "calendar-sync": [
      { slug: "ics-feed-1-way", note: "Members receive iCal/Google Calendar emails; staff can download schedules. (GymMaster)" }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Manual staff check-in. (GymMaster)" },
      { slug: "mobile-app-check-in", note: "App QR/Bluetooth check-in. (help.gymmaster.com)" },
      { slug: "kiosk-ipad-check-in", note: "Kiosk QR screen & self-service. (help.gymmaster.com)" },
      { slug: "qr-code-barcode-scanning", note: "QR check-in; barcode scanners supported. (help.gymmaster.com)" },
      { slug: "nfc-rfid", note: "RFID key tags/cards; Bluetooth mobile credentials. (GymMaster)" },
      { slug: "turnstile-door-access-integration", note: "Native 24/7 access/turnstiles with tailgating detection. (GymMaster)" }
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "Forms & Waivers (agreements/questionnaires). (help.gymmaster.com)" },
      { slug: "custom-fields", note: "Custom fields (text, dropdown, checkbox, date). (help.gymmaster.com)" },
      { slug: "e-sign-waivers", note: "Digital agreements at signup/booking. (GymMaster)" },
      { slug: "health-screening", note: "Questionnaires attached to booking types. (help.gymmaster.com)" },
      { slug: "per-class-forms", note: "Attach forms to classes/services. (GymMaster)" }
    ],
    "booking-models": [
      { slug: "guest-checkout", note: "Casual booking flow; optional password at checkout. (GymMaster)" },
      { slug: "account-required", note: "Member Portal/app logins. (GymMaster)" },
      { slug: "family-group-bookings", note: "Linked/family members & shared/corporate payer setups. (help.gymmaster.com)" },
      { slug: "corporate-team-bookings", note: "Corporate payer (one pays for many). (help.gymmaster.com)" }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Automated emails (marketing & reminders). (GymMaster)" },
      { slug: "sms-reminders", note: "Automated SMS; Twilio send/receive. (GymMaster)" },
      { slug: "push-notifications", note: "Push via Member App. (GymMaster)" },
      { slug: "two-way-sms", note: "Two-way SMS via Twilio replies. (help.gymmaster.com)" },
      { slug: "custom-templates", note: "Email/SMS templates & task automation. (GymMaster)" },
      { slug: "automated-waitlist-messages", note: "Waitlist notifications on slot opening. (GymMaster)" }
    ],
    "payment-gateways": [
      { slug: "stripe", note: "Stripe supported. (GymMaster)" },
      { slug: "paypal", note: "PayPal/Braintree supported. (GymMaster)" },
      { slug: "braintree", note: "Braintree supported. (GymMaster)" },
      { slug: "paysafe", note: "Paysafe supported. (GymMaster)" },
      { slug: "worldpay", note: "Worldpay for Platforms (Payrix) supported. (GymMaster)" },
      { slug: "bluefin", note: "Bluefin supported. (GymMaster)" },
      { slug: "fiserv", note: "Fiserv supported. (GymMaster)" },
      { slug: "global-payments", note: "Global Payments supported. (GymMaster)" },
      { slug: "gocardless", note: "GoCardless supported. (GymMaster)" },
      { slug: "ezypay", note: "Ezypay supported. (GymMaster)" },
      { slug: "ezidebit", note: "Ezidebit supported. (GymMaster)" },
      { slug: "paychoice", note: "PayChoice supported. (GymMaster)" },
      { slug: "paystack", note: "Paystack supported. (GymMaster)" },
      { slug: "square", note: "Square supported. (GymMaster)" }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Cards via multiple gateways. (GymMaster)" },
      { slug: "apple-pay", note: "Apple Pay via Braintree integration. (GymMaster)" },
      { slug: "google-pay", note: "Google Pay via Braintree integration. (GymMaster)" },
      { slug: "ach-debit", note: "ACH/Bank pulls via GoCardless; regional direct debits (Ezypay/Ezidebit). (GymMaster)" },
      { slug: "cash", note: "Cash in POS. (GymMaster)" }
    ],
    "point-of-sale-in-person": [
      { slug: "card-reader", note: "Ezidebit EFTPOS & other gateway swipers. (help.gymmaster.com)" },
      { slug: "cash-drawer", note: "Cash drawer supported. (GymMaster)" },
      { slug: "receipt-printer", note: "Receipt printer supported. (GymMaster)" },
      { slug: "barcode-scanner", note: "Barcode scanner supported. (GymMaster)" }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Per-class pricing. (help.gymmaster.com)" },
      { slug: "class-packs-punch-cards", note: "Class & Booking Packs; Club Visit Packs. (help.gymmaster.com)" },
      { slug: "memberships-subscriptions", note: "Extensive membership types & recurring billing. (GymMaster)" }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Integrated recurring payments. (GymMaster)" },
      { slug: "proration", note: "Prorata fees setting. (GymMaster)" },
      { slug: "dunning-retry-logic", note: "Failed billing handling & recollection automations. (GymMaster)" },
      { slug: "partial-payments", note: "Partial payments allowed. (help.gymmaster.com)" },
      { slug: "deposits", note: "Deposit money to member account. (help.gymmaster.com)" }
    ],
    "taxes-and-invoicing": [
      { slug: "tax-inclusive-exclusive", note: "Ex-tax display in portal/POS; broader tax setup implied. (GymMaster)" },
      { slug: "fiscal-receipts", note: "POS receipts (printer integration). (GymMaster)" }
    ],
    "discounts-and-credits": [
      { slug: "gift-cards", note: "Gift vouchers (code/value/expiry). (GymMaster)" }
    ],
    "risk-and-compliance": [
      { slug: "pci-dss-compliance", note: "PCI-compliant billing providers listed; risk features gateway-specific. (GymMaster)" }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Linked members/family payer setups. (help.gymmaster.com)" },
      { slug: "corporate-accounts", note: "Corporate payer setups. (help.gymmaster.com)" },
      { slug: "tags-segments", note: "Labels/tags & segmentation. (GymMaster)" }
    ],
    "memberships": [
      { slug: "contract-terms", note: "Membership contracts & summaries. (help.gymmaster.com)" },
      { slug: "freezes-holds", note: "Holds/suspensions incl. bulk holds. (help.gymmaster.com)" },
      { slug: "cancellation-policies", note: "Portal cancellation controls. (GymMaster)" },
      { slug: "usage-limits", note: "Benefits/limits per membership. (help.gymmaster.com)" },
      { slug: "access-control-by-membership", note: "Door access & benefits tied to membership. (GymMaster)" }
    ],
    "passes": [
      { slug: "class-packs", note: "Class packs. (help.gymmaster.com)" }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Member/prospect CRM. (GymMaster)" },
      { slug: "lead-capture-forms", note: "Online signups feed CRM. (GymMaster)" },
      { slug: "lead-pipeline-stages", note: "Prospect funnel reports & stages. (GymMaster)" }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Built-in email automations. (GymMaster)" },
      { slug: "sms-marketing", note: "Built-in SMS automations. (GymMaster)" },
      { slug: "marketing-automation", note: "Task automation triggers (failed billing, no-shows, etc.). (GymMaster)" }
    ],
    "ads-and-tracking": [
      { slug: "facebook-ads-pixel", note: "Facebook Pixel integration. (GymMaster)" },
      { slug: "google-ads-conversion", note: "Google Ads conversion integration. (GymMaster)" }
    ],
    "admin-and-permissions": [
      { slug: "role-based-permissions", note: "Staff roles/permissions. (GymMaster)" },
      { slug: "audit-logs", note: "Member Changes logging overhaul. (GymMaster)" }
    ],
    "scheduling-and-availability": [
      { slug: "staff-scheduling", note: "Rosters & open hours; trainer/resource scheduling. (GymMaster)" }
    ],
    "compensation": [
      { slug: "commission-structures", note: "Commission reporting to assist payouts. (GymMaster)" }
    ]
  }
},
{
  id: "gymdesk",
  name: "Gymdesk",
  url: "https://gymdesk.com/",
  additionalInfo: [
    "Door access at scale: integrations with Kisi and many smart locks (TTLock ecosystem), tied to membership/payment status. (docs.gymdesk.com)",
    "Branded Member App (your own iOS/Android). (docs.gymdesk.com)",
    "Native push notifications (1:1 & bulk; usable in automations). (Gymdesk)",
    "Booking → CRM funnel (bookings saved as leads automatically). (docs.gymdesk.com)",
    "Supports Stripe WisePOS-E & Square Terminal for in-person. (docs.gymdesk.com)",
    "Payment Element detects Apple/Google Pay and supports ACH/SEPA/Bacs where available. (Gymdesk)"
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Embeddable schedule & booking widgets. (docs.gymdesk.com)" },
      { slug: "embedded-iframe", note: "Wix example via iframe widget. (docs.gymdesk.com)" },
      { slug: "branded-microsite", note: "Hosted website builder included. (Gymdesk)" },
      { slug: "ios-app", note: "Member mobile app (optional fully branded). (Gymdesk)" },
      { slug: "android-app", note: "Member mobile app (optional fully branded). (Gymdesk)" },
      { slug: "phone-in-person-entry", note: "Managers/staff can book from manager account. (docs.gymdesk.com)" },
      { slug: "kiosk-self-service", note: "Self-service check-in via tablet/phone. (docs.gymdesk.com)" }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Paid per-session bookings. (Gymdesk)" },
      { slug: "workshops-events", note: "One-off events (seminars/parties). (docs.gymdesk.com)" },
      { slug: "private-1-1", note: "Private lessons. (docs.gymdesk.com)" },
      { slug: "virtual-live-video", note: "Remote session flag + Zoom integration. (docs.gymdesk.com)" },
      { slug: "on-demand-recorded-content", note: "Exclusive content/library in member app/portal. (Gymdesk)" }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Weekly/once; optional start/end dates. (docs.gymdesk.com)" },
      { slug: "fixed-date-courses", note: "Limit recurring sessions to date range. (docs.gymdesk.com)" }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Per session capacity. (docs.gymdesk.com)" },
      { slug: "waitlist", note: "Waitlist w/ auto-promotion. (docs.gymdesk.com)" },
      { slug: "booking-window-open-close", note: "Advanced booking restrictions & cut-offs. (docs.gymdesk.com)" },
      { slug: "cut-off-time-before-start", note: "Cut-off before start (policy). (docs.gymdesk.com)" },
      { slug: "late-cancel-rules", note: "Late cancel policy. (docs.gymdesk.com)" },
      { slug: "no-show-fee", note: "No-show fee in policies. (docs.gymdesk.com)" },
      { slug: "buffer-times-between-classes", note: "Buffer times supported in policies. (docs.gymdesk.com)" }
    ],
    "resource-allocation": [
      { slug: "instructors", note: "Assign one or more instructors. (docs.gymdesk.com)" }
    ],
    "calendar-sync": [
      { slug: "google-calendar-2-way", note: "Google Calendar connect/sync or embed (2-way direction not stated). (docs.gymdesk.com)" }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Check-ins by numeric code/name search/barcode/QR. (docs.gymdesk.com)" },
      { slug: "mobile-app-check-in", note: "Member app supports barcode/QR check-in. (docs.gymdesk.com)" },
      { slug: "kiosk-ipad-check-in", note: "Self-service tablet for check-ins. (docs.gymdesk.com)" },
      { slug: "qr-code-barcode-scanning", note: "QR & barcode supported. (docs.gymdesk.com)" },
      { slug: "nfc-rfid", note: "Supported through access systems (key fobs, etc.). (Gymdesk)" },
      { slug: "turnstile-door-access-integration", note: "Integrations with Kisi & many smart locks. (docs.gymdesk.com)" }
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "Full sign-up form customization. (docs.gymdesk.com)" },
      { slug: "custom-fields", note: "Custom fields. (docs.gymdesk.com)" },
      { slug: "e-sign-waivers", note: "Waivers & contracts with signatures. (docs.gymdesk.com)" },
      { slug: "health-screening", note: "Medical conditions section on forms. (docs.gymdesk.com)" }
    ],
    "booking-models": [
      { slug: "guest-checkout", note: "Non-members can book & pay. (Gymdesk)" },
      { slug: "account-required", note: "Member portal/app. (docs.gymdesk.com)" },
      { slug: "family-group-bookings", note: "Family accounts (shared payment, one primary). (docs.gymdesk.com)" },
      { slug: "add-on-upsells-at-checkout", note: "Paid Add-On Sessions. (docs.gymdesk.com)" }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Email messaging & templates. (docs.gymdesk.com)" },
      { slug: "sms-reminders", note: "Built-in SMS (reminders/marketing). (Gymdesk)" },
      { slug: "push-notifications", note: "Push via member app; usable in automations. (Gymdesk)" },
      { slug: "two-way-sms", note: "Lead replies are captured (members not explicitly stated). (docs.gymdesk.com)" }
    ],
    "payment-gateways": [
      { slug: "stripe", note: "Stripe supported. (docs.gymdesk.com)" },
      { slug: "square", note: "Square supported. (docs.gymdesk.com)" },
      { slug: "authorize-net", note: "Authorize.Net supported. (docs.gymdesk.com)" },
      { slug: "gocardless", note: "GoCardless supported. (docs.gymdesk.com)" },
      { slug: "ezypay", note: "Ezypay supported. (docs.gymdesk.com)" }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Cards online & in-person. (Gymdesk)" },
      { slug: "apple-pay", note: "Apple Pay via Stripe Payment Element. (Gymdesk)" },
      { slug: "google-pay", note: "Google Pay via Stripe Payment Element. (Gymdesk)" },
      { slug: "ach-debit", note: "ACH (US) via Stripe; Authorize.Net eChecks. (docs.gymdesk.com)" },
      { slug: "sepa-direct-debit", note: "SEPA DD via Stripe. (docs.gymdesk.com)" },
      { slug: "bancontact", note: "Bancontact via Stripe. (docs.gymdesk.com)" },
      { slug: "cash", note: "Cash (manual/ POS). (docs.gymdesk.com)" },
      { slug: "cheque", note: "Cheque (manual). (docs.gymdesk.com)" }
    ],
    "point-of-sale-in-person": [
      { slug: "card-reader", note: "Stripe BBPOS WisePOS-E & Square Terminal. (docs.gymdesk.com)" }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Per-session pricing. (Gymdesk)" },
      { slug: "class-packs-punch-cards", note: "Punch cards (incl. recharge at check-in). (Gymdesk)" },
      { slug: "memberships-subscriptions", note: "Core billing model. (docs.gymdesk.com)" },
      { slug: "free-trials", note: "Trial memberships. (docs.gymdesk.com)" }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Memberships + custom recurring payments. (docs.gymdesk.com)" },
      { slug: "dunning-retry-logic", note: "Auto-retry at 2/4/7 days. (docs.gymdesk.com)" },
      { slug: "partial-payments", note: "Invoices can reflect multiple partial payments. (docs.gymdesk.com)" },
      { slug: "deposits", note: "Sign-up fee on memberships. (docs.gymdesk.com)" }
    ],
    "taxes-and-invoicing": [
      { slug: "vat-gst-hst", note: "VAT/GST/HST; up to two rates. (docs.gymdesk.com)" },
      { slug: "multiple-tax-rates", note: "Multiple rates; inclusive/exclusive. (docs.gymdesk.com)" },
      { slug: "tax-inclusive-exclusive", note: "Tax inclusive & exclusive. (docs.gymdesk.com)" },
      { slug: "invoices", note: "Sales & invoices with downloadable receipts. (docs.gymdesk.com)" }
    ],
    "discounts-and-credits": [
      { slug: "coupon-codes", note: "Reusable public/private discounts. (docs.gymdesk.com)" },
      { slug: "store-credit", note: "Account balance for bookings. (Gymdesk)" },
      { slug: "gift-cards", note: "Digital gift cards. (docs.gymdesk.com)" },
      { slug: "family-discounts", note: "Family discounts in membership options. (docs.gymdesk.com)" }
    ],
    "risk-and-compliance": [
      { slug: "pci-dss-compliance", note: "Gymdesk does not store card data; processors handle PCI. (docs.gymdesk.com)" }
    ],
    "currency": [
      { slug: "multi-currency-pricing", note: "Account currency configurable; multi-currency not documented. (docs.gymdesk.com)" }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Family accounts. (docs.gymdesk.com)" },
      { slug: "emergency-contacts", note: "Emergency contacts on sign-up form. (docs.gymdesk.com)" },
      { slug: "medical-notes", note: "Medical/health via sign-up form. (docs.gymdesk.com)" },
      { slug: "tags-segments", note: "Member tags (bulk ops; targeting). (Gymdesk)" }
    ],
    "memberships": [
      { slug: "contract-terms", note: "E-signed contracts/waivers. (docs.gymdesk.com)" },
      { slug: "freezes-holds", note: "Freeze/unfreeze members. (docs.gymdesk.com)" },
      { slug: "usage-limits", note: "Deduct >1 per session if needed. (docs.gymdesk.com)" },
      { slug: "access-control-by-membership", note: "Access tied to active membership. (docs.gymdesk.com)" }
    ],
    "passes": [
      { slug: "class-packs", note: "Punch cards/passes. (Gymdesk)" }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Member profiles/history & comms. (docs.gymdesk.com)" },
      { slug: "lead-capture-forms", note: "Embeddable lead forms with CAPTCHA. (docs.gymdesk.com)" }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Built-in email campaigns. (docs.gymdesk.com)" },
      { slug: "sms-marketing", note: "Built-in SMS campaigns. (docs.gymdesk.com)" },
      { slug: "marketing-automation", note: "Automation builder (incl. push). (docs.gymdesk.com)" },
      { slug: "promo-codes", note: "Discount/coupon codes. (docs.gymdesk.com)" },
      { slug: "landing-pages", note: "Landing pages in website builder. (docs.gymdesk.com)" },
      { slug: "ads-and-tracking", note: "Custom JS snippets for GA/Ads/Facebook on forms. (docs.gymdesk.com)" }
    ]
  }
},
{
  id: "pushpress",
  name: "PushPress",
  url: "https://www.pushpress.com/",
  additionalInfo: [
    "Priority Booking windows (Core Pro/Max). (help.pushpress.com)",
    "Hybrid Plans: bundle group classes + appointment credits. (help.pushpress.com)",
    "Committed Club & Year-in-Review for attendance-based recognition. (help.pushpress.com)",
    "WhatsApp messaging via Grow (Meta-verified) + workflow use. (help.pushpress.com)",
    "Flex Fee to pass Stripe fees to customers. (help.pushpress.com)",
    "24/7 access via HybridAF integration. (help.pushpress.com)",
    "PCI/SCA focus (updates noted in release notes). (releasenotes.pushpress.com)",
    "Branded Member App (requires Apple Dev account). (help.pushpress.com)"
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Public calendar/plan pages/events/pre-orders embeddable (iframe ?framed=1). (help.pushpress.com)" },
      { slug: "embedded-iframe", note: "Embedded iframe supported. (help.pushpress.com)" },
      { slug: "branded-microsite", note: "Hosted public landing pages for plans/events/schedule. (help.pushpress.com)" },
      { slug: "ios-app", note: "PushPress Members (iOS). (Apple)" },
      { slug: "android-app", note: "PushPress Members (Android). (Google Play)" },
      { slug: "phone-in-person-entry", note: "Staff App: staff can book & check in. (help.pushpress.com)" },
      { slug: "kiosk-self-service", note: "Staff App Kiosk Mode for check-ins & purchases. (pushpress.com)" }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Drop-ins (best practices & sales). (help.pushpress.com)" },
      { slug: "course-multi-session-series", note: "Courses with fixed start/end. (help.pushpress.com)" },
      { slug: "workshops-events", note: "Events (incl. invite-only/team). (help.pushpress.com)" },
      { slug: "private-1-1", note: "Appointments (recurring, credit packs, booking). (help.pushpress.com)" },
      { slug: "semi-private-small-group", note: "Small groups via class caps. (help.pushpress.com)" },
      { slug: "virtual-live-video", note: "Virtual location + Zoom integration (via Grow). (help.pushpress.com)" }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Standard recurring schedules. (help.pushpress.com)" },
      { slug: "fixed-date-courses", note: "Fixed-date courses. (help.pushpress.com)" }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Attendance caps. (help.pushpress.com)" },
      { slug: "overbooking-allowance", note: "Coach override for full classes. (help.pushpress.com)" },
      { slug: "waitlist", note: "Class waitlists. (help.pushpress.com)" },
      { slug: "auto-promotion-from-waitlist", note: "Automatic promotion from waitlist. (help.pushpress.com)" },
      { slug: "booking-window-open-close", note: "Registration windows. (help.pushpress.com)" },
      { slug: "cut-off-time-before-start", note: "Lead times via registration settings. (help.pushpress.com)" },
      { slug: "late-cancel-rules", note: "Late cancellation/no-show charges via invoicing. (help.pushpress.com)" },
      { slug: "no-show-fee", note: "No-show fees via invoice workflow. (help.pushpress.com)" }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Multiple Locations (Physical/Virtual). (help.pushpress.com)" },
      { slug: "instructors", note: "Staff/coach assignment & availability. (help.pushpress.com)" }
    ],
    "calendar-sync": [
      { slug: "google-calendar-2-way", note: "2-way Google Calendar for Grow appointment calendars. (help.pushpress.com)" }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Check-ins via Staff App & Control Panel. (pushpress.com)" },
      { slug: "mobile-app-check-in", note: "Members check in via Member App. (help.pushpress.com)" },
      { slug: "kiosk-ipad-check-in", note: "Kiosk Mode in Staff App. (pushpress.com)" },
      { slug: "qr-code-barcode-scanning", note: "QR/barcode for Open Gym check-ins. (help.pushpress.com)" },
      { slug: "turnstile-door-access-integration", note: "24-hour access via HybridAF integration. (help.pushpress.com)" }
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "Grow form builder (standard + custom fields). (help.pushpress.com)" },
      { slug: "custom-fields", note: "Custom fields inc. signatures & file uploads. (help.pushpress.com)" },
      { slug: "e-sign-waivers", note: "Digital Documents (waivers/contracts) with e-signature. (help.pushpress.com)" },
      { slug: "health-screening", note: "PAR-Q as digital document. (help.pushpress.com)" }
    ],
    "booking-models": [
      { slug: "guest-checkout", note: "Guest checkout in Staff App POS for product sales; staff can book clients. (help.pushpress.com)" },
      { slug: "account-required", note: "Member accounts for booking/buying. (Apple/Google Play)" },
      { slug: "family-group-bookings", note: "Sub-accounts (families/couples) under one billing profile. (help.pushpress.com)" }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Confirmations/reminders configurable. (help.pushpress.com)" },
      { slug: "sms-reminders", note: "Mass & appointment SMS via Grow. (help.pushpress.com)" },
      { slug: "push-notifications", note: "Member App push for reservations/mentions. (help.pushpress.com)" },
      { slug: "whatsapp-notifications", note: "WhatsApp messaging via Grow. (help.pushpress.com)" },
      { slug: "two-way-sms", note: "Two-way SMS & Conversations inbox (Grow). (pushpress.com)" },
      { slug: "custom-templates", note: "Messaging/workflow templates in Grow. (help.pushpress.com)" },
      { slug: "automated-waitlist-messages", note: "Off-waitlist notifications included. (help.pushpress.com)" }
    ],
    "payment-gateways": [
      { slug: "stripe", note: "Stripe is the official/only processor. (help.pushpress.com)" }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Cards via Stripe. (help.pushpress.com)" },
      { slug: "ach-debit", note: "ACH Debit (US). (help.pushpress.com)" },
      { slug: "sepa-direct-debit", note: "SEPA Direct Debit (EU). (help.pushpress.com)" },
      { slug: "becs", note: "BECS (AU direct debit). (help.pushpress.com)" },
      { slug: "acss", note: "ACSS (CA direct debit). (help.pushpress.com)" },
      { slug: "cash", note: "Cash in Staff App POS (for product sales). (help.pushpress.com)" }
    ],
    "point-of-sale-in-person": [
      { slug: "barcode-scanner", note: "USB barcode/QR for Open Gym check-ins. (help.pushpress.com)" }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Drop-ins. (help.pushpress.com)" },
      { slug: "class-packs-punch-cards", note: "Punchcards. (help.pushpress.com)" },
      { slug: "memberships-subscriptions", note: "Recurring & non-recurring plans. (help.pushpress.com)" },
      { slug: "intro-offers", note: "Free or Paid Trial plans. (help.pushpress.com)" }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Monthly/4-week/bi-weekly etc. (help.pushpress.com)" },
      { slug: "proration", note: "Prorate on sign-up & fixed billing day. (help.pushpress.com)" },
      { slug: "dunning-retry-logic", note: "Nightly re-attempts on failed payments. (help.pushpress.com)" },
      { slug: "partial-payments", note: "Partial payments on open invoices. (help.pushpress.com)" },
      { slug: "split-payments", note: "Split amounts/dates for subscriptions & invoices. (help.pushpress.com)" }
    ],
    "taxes-and-invoicing": [
      { slug: "vat-gst-hst", note: "Sales tax per product & reporting. (help.pushpress.com)" },
      { slug: "tax-inclusive-exclusive", note: "Totals with tax shown at checkout. (pushpress.com)" },
      { slug: "invoices", note: "All transactions generate invoices; robust controls. (help.pushpress.com)" }
    ],
    "discounts-and-credits": [
      { slug: "gift-cards", note: "Gift certificates as products; applied as credit. (help.pushpress.com)" },
      { slug: "store-credit", note: "Gift certificate value as account credit. (help.pushpress.com)" }
    ],
    "risk-and-compliance": [
      { slug: "3-d-secure-sca", note: "SCA-compliant card entry (Stripe Elements). (releasenotes.pushpress.com)" },
      { slug: "pci-dss-compliance", note: "PCI compliance updates noted (Stripe Elements). (releasenotes.pushpress.com)" }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Sub-accounts (parents/children/couples). (help.pushpress.com)" },
      { slug: "tags-segments", note: "Member status tags; segmentation in Grow. (help.pushpress.com)" }
    ],
    "memberships": [
      { slug: "contract-terms", note: "Digital contracts attached to plans. (help.pushpress.com)" },
      { slug: "freezes-holds", note: "Hold options/fees. (help.pushpress.com)" },
      { slug: "cancellation-policies", note: "Admin-managed; Click-to-Cancel guidance. (help.pushpress.com)" },
      { slug: "usage-limits", note: "Reservation/class limits by plan. (help.pushpress.com)" },
      { slug: "access-control-by-membership", note: "Class/calendar restrictions; 24/7 via HybridAF. (help.pushpress.com)" }
    ],
    "passes": [
      { slug: "class-packs", note: "Punch cards. (help.pushpress.com)" }
    ],
    "community": [
      { slug: "forums-groups", note: "In-app community feed & mentions. (help.pushpress.com)" },
      { slug: "challenges", note: "Committed Club & consistency awards. (help.pushpress.com)" }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "PushPress Grow CRM. (pushpress.com)" },
      { slug: "lead-capture-forms", note: "Forms & landing pages. (help.pushpress.com)" },
      { slug: "lead-pipeline-stages", note: "Pipelines & Conversations in Grow. (help.pushpress.com)" }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Mass email in Grow. (help.pushpress.com)" },
      { slug: "sms-marketing", note: "Mass SMS & workflows. (help.pushpress.com)" },
      { slug: "marketing-automation", note: "Grow workflows & triggers. (help.pushpress.com)" },
      { slug: "landing-pages", note: "Landing pages for plans/events/products. (help.pushpress.com)" },
      { slug: "seo-tools", note: "Google Analytics integration documented. (help.pushpress.com)" }
    ],
    "ads-and-tracking": [
      { slug: "facebook-ads-pixel", note: "Facebook integrations referenced. (pushpress.com)" }
    ]
  }
}
, {
  id: "wodify",
  name: "Wodify",
  url: "https://www.wodify.com/",
  additionalInfo: [
    "Kiosk+ multi-panel displays (Workout/Leaderboard/Results, waiver QR) modernize in-gym screens. (help.wodify.com)",
    "Unified Inbox consolidates email, SMS, and in-app chat for true 2-way comms. (help.wodify.com)",
    "Workflows for marketing/retention automation (onboarding, re-engagement, etc.). (wodify.com)",
    "Groups/Dependents & shared payment methods simplify family/team management. (help.wodify.com)",
    "Google Calendar 2-way sync for appointments + ICS invites for clients. (help.wodify.com)",
    "Wodify Payments (Stripe) supports Apple Pay, Google Pay, ACH (US) & SEPA DD (EU). (help.wodify.com)",
    "HybridAF 24/7 door access integration (via Zapier). (help.wodify.com)",
    "Detailed financial tooling & reports incl. QuickBooks integrations, tax, proration rules. (help.wodify.com)"
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Embed schedule on your website. (help.wodify.com)" },
      { slug: "embedded-iframe", note: "Explicit iframe embed guide. (help.wodify.com)" },
      { slug: "branded-microsite", note: "Hosted Online Sales Page for memberships, packs, drop-ins. (help.wodify.com)" },
      { slug: "ios-app", note: "Wodify Client App (iOS). (help.wodify.com)" },
      { slug: "android-app", note: "Wodify Client App (Android). (help.wodify.com)" },
      { slug: "phone-in-person-entry", note: "Staff can reserve/sign in clients from Coach View/Core. (help.wodify.com)" },
      { slug: "kiosk-self-service", note: "Simple Sign-In Kiosk & Kiosk+. (help.wodify.com)" },
      { slug: "custom-portal-via-api", note: "Public APIs; Program API exposed. (wodify.com)" },
      { slug: "facebook-instagram-booking", note: "Can’t find information (Meta Pixel supported for ads/tracking). (help.wodify.com)" },
      { slug: "google-reserve", note: "Can’t find information." }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Drop-ins supported & configurable. (help.wodify.com)" },
      { slug: "workshops-events", note: "One-off/one-time classes. (help.wodify.com)" },
      { slug: "private-1-1", note: "Appointments / Personal Training. (help.wodify.com)" },
      { slug: "semi-private-small-group", note: "Can’t find information (appointments exist; not explicit ‘semi-private’)." },
      { slug: "virtual-live-video", note: "Can’t find information (no current Zoom/streaming doc)." },
      { slug: "on-demand-recorded-content", note: "Media Library for owner-uploaded videos (not a full paid VOD). (help.wodify.com)" }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Recurring schedules with multiple options. (help.wodify.com)" },
      { slug: "rolling-enrollments", note: "Ongoing memberships auto-renew. (help.wodify.com)" },
      { slug: "fixed-date-courses", note: "Recurring classes can have an end date/occurrence count (partial). (help.wodify.com)" },
      { slug: "waitlist-for-courses", note: "Waitlist exists for classes; course-specific not documented. (help.wodify.com)" }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Class limits. (help.wodify.com)" },
      { slug: "waitlist", note: "Waitlist with 2 modes. (help.wodify.com)" },
      { slug: "auto-promotion-from-waitlist", note: "Auto-add by order or notify-all, first-to-claim. (help.wodify.com)" },
      { slug: "booking-window-open-close", note: "Reservation open/close controls. (help.wodify.com)" },
      { slug: "cut-off-time-before-start", note: "Reservation & sign-in settings. (help.wodify.com)" },
      { slug: "late-cancel-rules", note: "Late cancel rules. (help.wodify.com)" },
      { slug: "no-show-fee", note: "No-show fee supported & reportable. (help.wodify.com)" },
      { slug: "equipment-based-capacity", note: "Can’t find information." },
      { slug: "overbooking-allowance", note: "Can’t find information." },
      { slug: "grace-periods", note: "Can’t find information." },
      { slug: "buffer-times-between-classes", note: "Can’t find information for classes (appointments use provider availability blocks). (help.wodify.com)" }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Multi-location; program/location access. (help.wodify.com)" },
      { slug: "instructors", note: "Assign coaches; provider availability. (help.wodify.com)" },
      { slug: "multiple-resources-per-booking", note: "Can’t find information." },
      { slug: "equipment", note: "Can’t find information (inventory exists; not for scheduling by equipment)." },
      { slug: "conflict-detection-prevention", note: "Appointments block provider’s classes & busy Google Calendar time. (help.wodify.com)" }
    ],
    "calendar-sync": [
      { slug: "google-calendar-2-way", note: "2-way for appointments (sync & block time). (help.wodify.com)" },
      { slug: "outlook-2-way", note: "Can’t find information." },
      { slug: "icloud-2-way", note: "Can’t find information." },
      { slug: "ics-feed-1-way", note: "Clients can enable calendar event emails with .ics. (help.wodify.com)" }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Coach View / Core. (help.wodify.com)" },
      { slug: "mobile-app-check-in", note: "Clients sign in via app. (help.wodify.com)" },
      { slug: "kiosk-ipad-check-in", note: "Simple Sign-In; Kiosk+. (help.wodify.com)" },
      { slug: "qr-code-barcode-scanning", note: "Can’t find information (QR for waivers exists; not for attendance). (help.wodify.com)" },
      { slug: "nfc-rfid", note: "Can’t find information." },
      { slug: "turnstile-door-access-integration", note: "HybridAF integration for 24/7 access (via Zapier). (help.wodify.com)" }
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "Waiver questionnaire & custom fields. (help.wodify.com)" },
      { slug: "e-sign-waivers", note: "Mobile/web/email; QR public link. (help.wodify.com)" },
      { slug: "health-screening", note: "Collect health questionnaire via waiver. (wodify.com)" },
      { slug: "parental-consent", note: "Guardians sign for dependents. (help.wodify.com)" },
      { slug: "per-class-forms", note: "Assign waivers by program/service. (help.wodify.com)" },
      { slug: "custom-fields", note: "Custom fields supported. (help.wodify.com)" },
      { slug: "conditional-logic", note: "Can’t find information." },
      { slug: "photo-video-consent", note: "Can’t find information (add via custom waiver text)."}
    ],
    "booking-models": [
      { slug: "account-required", note: "Client account/portal required. (help.wodify.com)" },
      { slug: "guest-checkout", note: "Can’t find information." },
      { slug: "family-group-bookings", note: "Guardians/Dependents; groups. (help.wodify.com)" },
      { slug: "corporate-team-bookings", note: "Groups allow shared payment; no separate corporate portal. (help.wodify.com)" },
      { slug: "multi-attendee-in-one-booking", note: "Book for dependents via Groups. (help.wodify.com)" },
      { slug: "add-on-upsells-at-checkout", note: "Can’t find information." }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Extensive automated emails for attendance, payments, etc. (help.wodify.com)" },
      { slug: "sms-reminders", note: "SMS + unified inbox. (help.wodify.com)" },
      { slug: "push-notifications", note: "Mobile app notifications incl. waitlist. (help.wodify.com)" },
      { slug: "two-way-sms", note: "Inbox consolidates SMS/email/in-app chat. (help.wodify.com)" },
      { slug: "custom-templates", note: "Email templates. (help.wodify.com)" },
      { slug: "automated-waitlist-messages", note: "Email + push for waitlist. (help.wodify.com)" },
      { slug: "whatsapp-notifications", note: "Can’t find information." }
    ],
    "payment-gateways": [
      { slug: "stripe", note: "Wodify Payments powered by Stripe. (help.wodify.com)" }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Cards supported. (help.wodify.com)" },
      { slug: "apple-pay", note: "Apple Pay supported (2024 update). (help.wodify.com)" },
      { slug: "google-pay", note: "Google Pay supported (2024 update). (help.wodify.com)" },
      { slug: "ach-debit", note: "ACH (US). (help.wodify.com)" },
      { slug: "sepa-direct-debit", note: "SEPA Direct Debit (EU). (help.wodify.com)" },
      { slug: "cash", note: "Cash workflows. (help.wodify.com)" },
      { slug: "cheque", note: "Check workflows. (help.wodify.com)" }
    ],
    "point-of-sale-in-person": [
      { slug: "card-reader", note: "Wodify Payments card reader for invoices/retail/drop-ins. (help.wodify.com)" }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Drop-ins. (help.wodify.com)" },
      { slug: "class-packs-punch-cards", note: "Class Pack memberships. (help.wodify.com)" },
      { slug: "memberships-subscriptions", note: "Auto-renew; plans/packs. (help.wodify.com)" },
      { slug: "free-trials", note: "Free trial setup & limits. (help.wodify.com)" }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Automated daily billing runs. (help.wodify.com)" },
      { slug: "proration", note: "Proration via invoice config & billing day rules. (help.wodify.com)" },
      { slug: "dunning-retry-logic", note: "Automatic retries. (help.wodify.com)" },
      { slug: "installments", note: "Installments/Setup fees for appointments (payment plans). (help.wodify.com)" }
    ],
    "taxes-and-invoicing": [
      { slug: "vat-gst-hst", note: "Sales tax support & FAQs. (help.wodify.com)" },
      { slug: "multiple-tax-rates", note: "Invoice configuration & tax settings. (help.wodify.com)" },
      { slug: "invoices", note: "Create/email/refund/discount invoices. (help.wodify.com)" }
    ],
    "discounts-and-credits": [
      { slug: "coupon-codes", note: "Promo/coupon codes. (help.wodify.com)" },
      { slug: "store-credit", note: "Store credit. (help.wodify.com)" }
    ],
    "risk-and-compliance": [
      { slug: "3-d-secure-sca", note: "PSD2/SCA with 3DS. (help.wodify.com)" },
      { slug: "chargeback-management", note: "Chargeback guidance & timelines. (help.wodify.com)" }
    ],
    "currency": [
      { slug: "multi-currency-pricing", note: "Can’t find information (global currency per environment exists). (help.wodify.com)" }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Groups: guardians/dependents, shared payments. (help.wodify.com)" },
      { slug: "corporate-accounts", note: "Groups support shared payment methods for teams (no separate corporate entity). (help.wodify.com)" },
      { slug: "emergency-contacts", note: "Collect & enforce via forms/emails. (help.wodify.com)" },
      { slug: "medical-notes", note: "Notes on client profile (medical history). (help.wodify.com)" },
      { slug: "tags-segments", note: "Client tags & segments. (help.wodify.com)" }
    ],
    "memberships": [
      { slug: "contract-terms", note: "Contracts tied to memberships; enforcement. (help.wodify.com)" },
      { slug: "freezes-holds", note: "Freezes/holds. (help.wodify.com)" },
      { slug: "cancellation-policies", note: "Schedule cancellations; end auto-renew. (help.wodify.com)" },
      { slug: "usage-limits", note: "Attendance limits by plan/pack. (help.wodify.com)" },
      { slug: "access-control-by-membership", note: "Membership enforcement; program/location access. (help.wodify.com)" }
    ],
    "passes": [
      { slug: "class-packs", note: "Session/class packs. (help.wodify.com)" }
    ],
    "loyalty-and-referral": [
      { slug: "streaks-badges", note: "Weekly Streaks. (help.wodify.com)" }
    ],
    "gift-cards": [
      { slug: "digital-gift-cards", note: "Can’t find information." },
      { slug: "physical-gift-cards", note: "Can’t find information." }
    ],
    "community": [
      { slug: "leaderboards", note: "Leaderboards via Wodify Perform add-on & Kiosk+. (help.wodify.com)" }
    ],
    "admin-and-permissions": [
      { slug: "role-based-permissions", note: "Admins, Managers, Coaches, Staff, Clients. (help.wodify.com)" }
    ],
    "scheduling-and-availability": [
      { slug: "staff-scheduling", note: "Assign coaches to classes; provider calendars for appointments (partial). (help.wodify.com)" },
      { slug: "availability-rules", note: "Provider recurring availability; block busy time; reservation windows. (help.wodify.com)" }
    ],
    "compensation": [
      { slug: "payroll-export", note: "Financial reports include payroll category. (help.wodify.com)" }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Client profiles, notes, tags, activity feed. (help.wodify.com)" },
      { slug: "lead-capture-forms", note: "Web form → lead + automated email. (help.wodify.com)" },
      { slug: "lead-pipeline-stages", note: "Lead statuses/owner & activity (no Kanban). (help.wodify.com)" }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Mass email, templates, automations. (help.wodify.com)" },
      { slug: "sms-marketing", note: "SMS & Inbox. (help.wodify.com)" },
      { slug: "marketing-automation", note: "Workflows. (wodify.com)" },
      { slug: "promo-codes", note: "Promo codes. (help.wodify.com)" },
      { slug: "landing-pages", note: "Online Sales Page. (help.wodify.com)" }
    ],
    "ads-and-tracking": [
      { slug: "facebook-ads-pixel", note: "Meta Pixel integration. (help.wodify.com)" }
    ]
  }
},
{
  id: "clubready",
  name: "ClubReady",
  url: "https://www.clubready.com/",
  additionalInfo: [
    "PayFac using Worldpay rails (ClubReady is facilitator, not processor). (clubready.zendesk.com)",
    "Members App barcode for contactless check-in via web kiosk. (ClubReady)",
    "PerformanceIQ spot-booking & layouts for bikes/rooms; in-class challenges support. (ClubReady)",
    "Two-way SMS + waitlist automations via ClubReady Connect add-on. (ClubReady)",
    "Factor4 gift card integration exposed via API (balance inquiry, account types). (ClubReady)",
    "Hardware-ready POS (Star TSP100 printer, cash drawer, barcode scanner). (ClubReady)",
    "Zoom/virtual class guidance with dedicated booking policies. (ClubReady)"
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Class Schedule Widget embeddable. (ClubReady)" },
      { slug: "embedded-iframe", note: "Examples of live booking widgets. (ClubReady)" },
      { slug: "branded-microsite", note: "Personalized login pages/hosted flows. (ClubReady)" },
      { slug: "custom-portal-via-api", note: "Public API & Swagger. (ClubReady)" },
      { slug: "phone-in-person-entry", note: "Staff can book via POS/Backoffice. (ClubReady)" },
      { slug: "kiosk-self-service", note: "Web/iPad Check-In Web Kiosk. (ClubReady)" },
      { slug: "ios-app", note: "ClubReady Members App (iOS). (ClubReady)" },
      { slug: "android-app", note: "ClubReady Members App (Android). (ClubReady)" },
      { slug: "facebook-instagram-booking", note: "Can’t find information." },
      { slug: "google-reserve", note: "Can’t find information." }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Standard classes. (ClubReady)" },
      { slug: "workshops-events", note: "Workshops/camps. (ClubReady)" },
      { slug: "virtual-live-video", note: "Zoom/virtual set-up. (ClubReady)" },
      { slug: "private-1-1", note: "1-on-1 services via Grid view. (ClubReady)" },
      { slug: "semi-private-small-group", note: "Classes & groups (small group supported). (ClubReady)" }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Recurring classes with booking policies. (ClubReady)" },
      { slug: "waitlist", note: "Waitlist for classes. (ClubReady)" }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Set class capacity. (ClubReady)" },
      { slug: "waitlist", note: "Waitlist with policy windows. (ClubReady)" },
      { slug: "booking-window-open-close", note: "Lead/cancel windows. (ClubReady)" },
      { slug: "cut-off-time-before-start", note: "Reservation cutoff. (ClubReady)" },
      { slug: "late-cancel-rules", note: "Late-cancel rules/fees. (ClubReady)" },
      { slug: "no-show-fee", note: "Show/No-Show logging & fees in practice. (ClubReady)" },
      { slug: "grace-periods", note: "Grace via policy windows. (ClubReady)" }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Some brands use room/bike layouts; spot booking. (ClubReady)" },
      { slug: "instructors", note: "Classes assign instructors. (ClubReady)" }
    ],
    "calendar-sync": [
      { slug: "ics-feed-1-way", note: "Members can add to calendars (1-click). (ClubReady)" }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Staff check-in + time clock. (ClubReady)" },
      { slug: "kiosk-ipad-check-in", note: "Web/iPad check-in kiosk. (ClubReady)" },
      { slug: "mobile-app-check-in", note: "Barcode in Members App. (ClubReady)" },
      { slug: "barcode-scanner", note: "Barcode scanning supported hardware. (ClubReady)" },
      { slug: "fingerprint", note: "Fingerprint hardware supported. (ClubReady)" }
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "Custom forms & presentations. (ClubReady)" },
      { slug: "e-sign-waivers", note: "E-sign waivers/agreements. (ClubReady)" },
      { slug: "health-screening", note: "Health history forms. (ClubReady)" },
      { slug: "parental-consent", note: "Parental/guardian flows documented. (ClubReady)" },
      { slug: "per-class-forms", note: "Attach forms to products/classes. (ClubReady)" },
      { slug: "custom-fields", note: "Custom fields. (ClubReady)" }
    ],
    "booking-models": [
      { slug: "account-required", note: "Personalized login required. (ClubReady)" },
      { slug: "family-group-bookings", note: "Associated Members + multi-member per agreement. (ClubReady)" },
      { slug: "multi-attendee-in-one-booking", note: "Multi-member under one agreement. (ClubReady)" },
      { slug: "corporate-team-bookings", note: "Corporate/multi-location groups supported. (ClubReady)" },
      { slug: "guest-checkout", note: "Can’t find information." }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Built-in comms. (ClubReady)" },
      { slug: "sms-reminders", note: "ClubReady Connect SMS. (ClubReady)" },
      { slug: "two-way-sms", note: "Two-way SMS & shared inbox (Connect). (ClubReady)" },
      { slug: "automated-waitlist-messages", note: "Automated waitlist notifications. (ClubReady)" },
      { slug: "push-notifications", note: "Push via myFitApp integration. (ClubReady)" }
    ],
    "payment-gateways": [
      { slug: "worldpay", note: "ClubReady is a PayFac using Worldpay rails. (clubready.zendesk.com)" },
      { slug: "authorize-net", note: "Historic Authorize.Net note for some card-present setups (older docs). (clubready.zendesk.com)" }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Cards supported. (ClubReady)" },
      { slug: "ach-debit", note: "ACH/bank account. (ClubReady)" },
      { slug: "cash", note: "Cash accepted. (ClubReady)" },
      { slug: "cheque", note: "Cheque accepted. (ClubReady)" },
      { slug: "gift-cards", note: "Factor4 gift cards via API/POS. (ClubReady)" }
    ],
    "point-of-sale-in-person": [
      { slug: "card-reader", note: "Card-present options supported; external terminal option. (ClubReady)" },
      { slug: "cash-drawer", note: "Supported (Star TSP100 + drawer). (ClubReady)" },
      { slug: "receipt-printer", note: "Star TSP100 receipt printer. (ClubReady)" },
      { slug: "barcode-scanner", note: "Barcode scanners supported. (ClubReady)" }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Single classes. (ClubReady)" },
      { slug: "class-packs-punch-cards", note: "Packages/session credits. (ClubReady)" },
      { slug: "memberships-subscriptions", note: "Recurring dues. (ClubReady)" },
      { slug: "intro-offers", note: "Intro offers supported. (ClubReady)" },
      { slug: "free-trials", note: "Free trials supported. (ClubReady)" }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Recurring billing supported. (ClubReady)" },
      { slug: "installments", note: "Installment plans. (ClubReady)" },
      { slug: "split-payments", note: "Split payments supported. (ClubReady)" },
      { slug: "partial-payments", note: "Partial refunds & manual invoices; partial payments unclear for recurring. (ClubReady)" },
      { slug: "deposits", note: "Down payments on agreements. (ClubReady)" }
    ],
    "taxes-and-invoicing": [
      { slug: "vat-gst-hst", note: "Sales tax settings. (ClubReady)" },
      { slug: "multiple-tax-rates", note: "Tax schedules/defaults. (ClubReady)" },
      { slug: "invoices", note: "Invoices/statements built-in. (ClubReady)" }
    ],
    "discounts-and-credits": [
      { slug: "coupon-codes", note: "Coupon/promo codes & package discounts. (ClubReady)" },
      { slug: "store-credit", note: "Credit on account. (ClubReady)" },
      { slug: "gift-cards", note: "Gift cards via Factor4. (ClubReady)" }
    ],
    "risk-and-compliance": [
      { slug: "pci-dss-compliance", note: "PCI (PayFac w/ Worldpay). (clubready.zendesk.com)" },
      { slug: "avs", note: "AVS checks & declines for mismatch. (clubready.zendesk.com)" },
      { slug: "chargeback-management", note: "Chargeback management guides/timelines. (clubready.zendesk.com)" }
    ],
    "currency": [
      { slug: "multi-currency-pricing", note: "Can’t find information." },
      { slug: "set-terminal-currency", note: "Select currency per POS terminal. (ClubReady)" }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Primary + Associated Members. (ClubReady)" },
      { slug: "corporate-accounts", note: "Corporate accounts / multi-location groups. (ClubReady)" },
      { slug: "tags-segments", note: "Automations incl. Custom Dimensions/Lead Types. (ClubReady)" },
      { slug: "medical-notes", note: "Health History forms. (ClubReady)" }
    ],
    "memberships": [
      { slug: "contract-terms", note: "Contract terms in agreements. (ClubReady)" },
      { slug: "freezes-holds", note: "Freeze/hold options & fees. (ClubReady)" },
      { slug: "cancellation-policies", note: "Cancellation defaults. (ClubReady)" },
      { slug: "usage-limits", note: "Usage via credits. (ClubReady)" }
    ],
    "passes": [
      { slug: "class-packs", note: "Class/session packs. (ClubReady)" },
      { slug: "expiration-rules", note: "Credit expiration rules. (ClubReady)" },
      { slug: "shareable-passes", note: "Session credit sharing. (ClubReady)" }
    ],
    "loyalty-and-referral": [
      { slug: "challenges", note: "Challenges/performance layout features. (ClubReady)" }
    ],
    "gift-cards": [
      { slug: "digital-gift-cards", note: "Factor4 gift cards (digital vs physical unspecified). (ClubReady)" },
      { slug: "balance-management", note: "Gift card balances & remittance. (ClubReady)" }
    ],
    "admin-and-permissions": [
      { slug: "role-based-permissions", note: "KB articles list required permissions per action. (ClubReady)" }
    ],
    "scheduling-and-availability": [
      { slug: "staff-scheduling", note: "Staff scheduling present. (ClubReady)" },
      { slug: "availability-rules", note: "My Availability. (ClubReady)" }
    ],
    "compensation": [
      { slug: "payroll-export", note: "Payroll export/reports (time clock & session payroll). (ClubReady)" },
      { slug: "commission-structures", note: "Commission structures / split sale. (ClubReady)" }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Contact CRM built-in. (ClubReady)" },
      { slug: "lead-capture-forms", note: "Customizable forms. (ClubReady)" },
      { slug: "lead-pipeline-stages", note: "Lead dashboard & tasks. (ClubReady)" }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Email marketing. (ClubReady)" },
      { slug: "sms-marketing", note: "SMS marketing. (ClubReady)" },
      { slug: "marketing-automation", note: "Automation conditions/categories. (ClubReady)" },
      { slug: "promo-codes", note: "Promo codes. (ClubReady)" },
      { slug: "landing-pages", note: "Presentations/Forms for landing pages. (ClubReady)" }
    ]
  }
},
{
  id: "hapana",
  name: "Hapana",
  url: "https://hapana.com/",
  additionalInfo: [
    "Industry-first Challenge app with rewards/milestones, wearable sync & referral QR. (Hapana)",
    "Door access automation via Avigilon Alta (Openpath) auto-checks members in; Inception access also listed. (Hapana)",
    "Two-part authentication for private sessions (member confirms attendance) to validate PT & payroll. (Hapana)",
    "Shared Credits & Book-a-Buddy for family/buddy bookings. (Hapana)",
    "Apple Pay & Google Pay in branded app/embeds (Stripe Express). (Hapana)",
    "Stripe disputes handled inside Core; Stripe Terminal S700 with hub peripherals. (Hapana)",
    "Dynamic Display rules for upsell gating; Zapier + Webhooks; API keys. (Hapana)",
    "Read-only ICS sync (clarifies not 2-way). (Hapana)"
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Widgets for classes, packages, privates, workshops, gift cards, login/dashboard. (Hapana)" },
      { slug: "embedded-iframe", note: "Embeds supported. (Hapana)" },
      { slug: "ios-app", note: "White-label branded member app (iOS). (Hapana)" },
      { slug: "android-app", note: "White-label branded member app (Android). (Hapana)" },
      { slug: "phone-in-person-entry", note: "Staff can book from Core. (Hapana)" },
      { slug: "kiosk-self-service", note: "Front Desk Kiosk & check-in kiosk/widget. (Hapana)" },
      { slug: "custom-portal-via-api", note: "API keys/SPiBI + Zapier/webhooks. (Hapana)" }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Drop-ins supported. (Hapana)" },
      { slug: "workshops-events", note: "Workshops widget. (Hapana)" },
      { slug: "private-1-1", note: "Privates widget & booking workflow. (Hapana)" },
      { slug: "virtual-live-video", note: "Zoom integration. (Hapana)" },
      { slug: "on-demand-recorded-content", note: "On-demand supported. (Hapana)" }
    ],
    "recurrence": [
      { slug: "waitlist", note: "Waitlist with locks, windows, autopromotion. (Hapana)" }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "System prevents overbooking unless allowed. (Hapana)" },
      { slug: "equipment-based-capacity", note: "Spot selection (beds/bikes/stations). (Hapana)" },
      { slug: "overbooking-allowance", note: "Overbooking allowance configurable. (Hapana)" },
      { slug: "waitlist", note: "Waitlist supported. (Hapana)" },
      { slug: "auto-promotion-from-waitlist", note: "Auto-promotion supported. (Hapana)" },
      { slug: "booking-window-open-close", note: "Booking windows supported. (Hapana)" },
      { slug: "cut-off-time-before-start", note: "Cancellations & locks. (Hapana)" },
      { slug: "late-cancel-rules", note: "Late cancel report & permissions. (Hapana)" },
      { slug: "no-show-fee", note: "No-show fee supported. (Hapana)" }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Rooms/locations as resources. (Hapana)" },
      { slug: "equipment", note: "Equipment-based layouts. (Hapana)" },
      { slug: "instructors", note: "Instructor permissions. (Hapana)" },
      { slug: "conflict-detection-prevention", note: "Restrict overlapping room usage; overlap rules configurable. (Hapana)" }
    ],
    "calendar-sync": [
      { slug: "ics-feed-1-way", note: "Read-only ICS feeds (Google/Apple/Outlook). (Hapana)" }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Check-in widget/flow. (Hapana)" },
      { slug: "mobile-app-check-in", note: "Contactless/mobile check-in option. (Hapana)" },
      { slug: "kiosk-ipad-check-in", note: "Front Desk Kiosk. (Hapana)" },
      { slug: "qr-code-barcode-scanning", note: "Barcode check-in URL + scanner. (Hapana)" },
      { slug: "nfc-rfid", note: "Door access via Avigilon Alta/Openpath (mobile credentials). (Hapana)" },
      { slug: "turnstile-door-access-integration", note: "Avigilon Alta/Openpath & Inception access. (Hapana)" }
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "Custom forms/fields at signup/checkout. (Hapana)" },
      { slug: "e-sign-waivers", note: "Agreement step + Topaz signature pad. (Hapana)" }
    ],
    "booking-models": [
      { slug: "account-required", note: "Accounts/login widgets; app bookings require login/agreements. (Hapana)" },
      { slug: "family-group-bookings", note: "Book-a-Buddy & Shared Credits. (Hapana)" },
      { slug: "multi-attendee-in-one-booking", note: "Book-a-Buddy for multiple attendees. (Hapana)" }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Trigger emails configurable. (Hapana)" },
      { slug: "sms-reminders", note: "SMS triggers + credits. (Hapana)" },
      { slug: "push-notifications", note: "Push notifications. (Hapana)" },
      { slug: "whatsapp-notifications", note: "WhatsApp via GROW channels. (Hapana)" },
      { slug: "two-way-sms", note: "Two-way SMS via GROW Conversations. (Hapana)" },
      { slug: "custom-templates", note: "GROW email builder + Core trigger content. (Hapana)" }
    ],
    "payment-gateways": [
      { slug: "stripe", note: "Stripe incl. Terminal & disputes. (Hapana)" },
      { slug: "ezidebit", note: "Ezidebit supported. (Hapana)" },
      { slug: "ezypay", note: "Ezypay supported. (Hapana)" },
      { slug: "fat-zebra", note: "Fat Zebra (release notes). (Hapana)" },
      { slug: "midtrans", note: "Midtrans integration. (Hapana)" }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Cards via Stripe online/Terminal. (Hapana)" },
      { slug: "apple-pay", note: "Apple Pay (Stripe Express). (Hapana)" },
      { slug: "google-pay", note: "Google Pay (Stripe Express). (Hapana)" },
      { slug: "bank-transfer", note: "Generic bank transfer/bank debit options. (Hapana)" },
      { slug: "cash", note: "Cash supported. (Hapana)" }
    ],
    "point-of-sale-in-person": [
      { slug: "card-reader", note: "Stripe Reader S700. (Hapana)" },
      { slug: "tap-to-pay", note: "Ezypay Tap-to-Pay listed. (Hapana)" },
      { slug: "cash-drawer", note: "Cash drawer enable/permissions. (Hapana)" },
      { slug: "receipt-printer", note: "Printer via S700 hub peripheral. (Hapana)" },
      { slug: "barcode-scanner", note: "Barcode scanner via S700 hub; check-in scanner. (Hapana)" }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Single class. (Hapana)" },
      { slug: "class-packs-punch-cards", note: "Packs supported. (Hapana)" },
      { slug: "memberships-subscriptions", note: "Auto-renew memberships. (Hapana)" },
      { slug: "intro-offers", note: "Intro offers (On First Use allocation). (Hapana)" },
      { slug: "free-trials", note: "Free trials (quick sale). (Hapana)" }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Automated cycles. (Hapana)" },
      { slug: "dunning-retry-logic", note: "Retry settings & failed payment reports. (Hapana)" }
    ],
    "taxes-and-invoicing": [
      { slug: "vat-gst-hst", note: "Registered tax setup. (Hapana)" },
      { slug: "multiple-tax-rates", note: "Multiple tax rates. (Hapana)" },
      { slug: "tax-inclusive-exclusive", note: "Inclusive/exclusive supported. (Hapana)" },
      { slug: "invoices", note: "Invoices & Stripe settlements/fee invoices. (Hapana)" }
    ],
    "discounts-and-credits": [
      { slug: "coupon-codes", note: "Promo/coupon codes. (Hapana)" },
      { slug: "referral-discounts", note: "Refer-a-friend. (Hapana)" },
      { slug: "gift-cards", note: "Digital gift cards & redemption. (Hapana)" },
      { slug: "store-credit", note: "Account credit supported. (Hapana)" }
    ],
    "risk-and-compliance": [
      { slug: "3-d-secure-sca", note: "Stripe SCA updates. (Hapana)" },
      { slug: "pci-dss-compliance", note: "Handled via Stripe/Terminal (PCI L1 & E2EE notes). (Hapana)" },
      { slug: "chargeback-management", note: "Manage Stripe disputes in Core. (Hapana)" }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Shared Credits across family/buddies. (Hapana)" },
      { slug: "medical-notes", note: "SOAP session notes permissions. (Hapana)" },
      { slug: "tags-segments", note: "Smart Lists, groups/segments. (Hapana)" }
    ],
    "memberships": [
      { slug: "contract-terms", note: "Agreements with e-signature in checkout. (Hapana)" },
      { slug: "freezes-holds", note: "Suspensions & arrears holds. (Hapana)" },
      { slug: "cancellation-policies", note: "Cancellation process/permissions. (Hapana)" },
      { slug: "access-control-by-membership", note: "Door access checks membership/booking. (Hapana)" }
    ],
    "passes": [
      { slug: "class-packs", note: "Class packs. (Hapana)" },
      { slug: "expiration-rules", note: "Custom validity & bulk extend. (Hapana)" },
      { slug: "shareable-passes", note: "Shared Credits (shareable). (Hapana)" }
    ],
    "loyalty-and-referral": [
      { slug: "referrals", note: "Refer-a-friend. (Hapana)" },
      { slug: "streaks-badges", note: "Challenges app (rewards & milestones). (Hapana)" }
    ],
    "gift-cards": [
      { slug: "digital-gift-cards", note: "Digital gift cards/widgets. (Hapana)" },
      { slug: "balance-management", note: "Account credit balance view. (Hapana)" }
    ],
    "community": [
      { slug: "challenges", note: "Challenge app. (Hapana)" }
    ],
    "admin-and-permissions": [
      { slug: "role-based-permissions", note: "Granular ‘Team Access’ controls. (Hapana)" }
    ],
    "scheduling-and-availability": [
      { slug: "staff-scheduling", note: "Manage staff shifts. (Hapana)" },
      { slug: "availability-rules", note: "Employee work hours. (Hapana)" }
    ],
    "compensation": [
      { slug: "performance-dashboards", note: "Dash/KPI & reporting. (Hapana)" }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "CRM in Core/GROW. (Hapana)" },
      { slug: "lead-capture-forms", note: "Sites forms/surveys/funnels. (Hapana)" },
      { slug: "lead-pipeline-stages", note: "Pipelines in GROW. (Hapana)" }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "GROW email. (Hapana)" },
      { slug: "sms-marketing", note: "GROW SMS. (Hapana)" },
      { slug: "marketing-automation", note: "GROW automations. (Hapana)" },
      { slug: "promo-codes", note: "Promo codes in Core. (Hapana)" },
      { slug: "landing-pages", note: "Landing pages. (Hapana)" }
    ],
    "ads-and-tracking": [
      { slug: "facebook-ads-pixel", note: "Facebook Pixel supported. (Hapana)" },
      { slug: "google-ads-conversion", note: "Via Google Tag Manager integration. (Hapana)" }
    ]
  }
},
{
  id: "marianatek",
  name: "Mariana Tek",
  url: "https://www.marianatek.com/",
  additionalInfo: [
    "Pick-a-Spot seat/spot selection (great for cycling/Pilates). (Xplor Mariana Tek)",
    "Mobile Check-In with geofencing & push reminders. (support.marianatek.com)",
    "Biz App Kiosk Mode for self check-in & signing agreements. (support.marianatek.com)",
    "Rich APIs: Admin, Customer, Studio, Documents, MT Stripe, Pricing Engine (dynamic pricing), webhooks. (guides.marianatek.com)",
    "Web Integrations to embed schedule/account/checkout on your site. (guides.marianatek.com)",
    "Two-way SMS & marketing automation via Xplor Growth. (Xplor Mariana Tek)",
    "Franchise Fee Portal (beta) with Stripe Connect Express. (support.marianatek.com)",
    "Add-to-calendar links from web & apps for reservations. (support.marianatek.com)"
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Web Integrations for embedding schedule/account/checkout. (guides.marianatek.com)" },
      { slug: "ios-app", note: "Custom-branded iOS app included (Core). (Xplor Mariana Tek)" },
      { slug: "android-app", note: "Custom-branded Android app included (Core). (Xplor Mariana Tek)" },
      { slug: "phone-in-person-entry", note: "Staff can make reservations in Admin past cutoff. (support.marianatek.com)" },
      { slug: "kiosk-self-service", note: "Biz App Kiosk Mode for self check-in. (support.marianatek.com)" },
      { slug: "custom-portal-via-api", note: "Customer API for custom booking/buy flows. (guides.marianatek.com)" },
      { slug: "embedded-iframe", note: "Script embed (no explicit iframe doc). (guides.marianatek.com)" },
      { slug: "branded-microsite", note: "Can’t find information." },
      { slug: "facebook-instagram-booking", note: "Can’t find information." },
      { slug: "google-reserve", note: "Can’t find information." }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Standard class creation/scheduling. (support.marianatek.com)" },
      { slug: "workshops-events", note: "Dedicated Event setup. (support.marianatek.com)" },
      { slug: "private-1-1", note: "Personal Training (capacity 1, private/public). (support.marianatek.com)" },
      { slug: "semi-private-small-group", note: "Supported via classroom layouts/capacity. (support.marianatek.com)" },
      { slug: "virtual-live-video", note: "Livestream classes w/ external link + automated email. (support.marianatek.com)" },
      { slug: "on-demand-recorded-content", note: "Video on Demand class type. (support.marianatek.com)" }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Create & end recurring series. (support.marianatek.com)" }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Capacity via classroom layouts (required). (support.marianatek.com)" },
      { slug: "equipment-based-capacity", note: "Pick-a-Spot for equipment-based studios. (Xplor Mariana Tek)" },
      { slug: "waitlist", note: "Global waitlist cutoff setting. (support.marianatek.com)" },
      { slug: "auto-promotion-from-waitlist", note: "Auto-fill window & overrides. (support.marianatek.com)" },
      { slug: "booking-window-open-close", note: "Reservation cutoff window. (support.marianatek.com)" },
      { slug: "cut-off-time-before-start", note: "Same as above. (support.marianatek.com)" },
      { slug: "late-cancel-rules", note: "Configurable late-cancel policy/fees. (support.marianatek.com)" },
      { slug: "no-show-fee", note: "No-show fees supported/billed. (support.marianatek.com)" },
      { slug: "grace-periods", note: "Grace cancel/no-show to waive penalties. (support.marianatek.com)" }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Locations, classrooms & layouts. (support.marianatek.com)" },
      { slug: "equipment", note: "Equipment layouts (reformer/bike/etc.). (Xplor Mariana Tek)" },
      { slug: "instructors", note: "Unlimited instructors. (Xplor Mariana Tek)" }
    ],
    "calendar-sync": [
      { slug: "add-to-calendar", note: "Customers add reservations to device calendar. (support.marianatek.com)" }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Admin & Biz App check-in. (support.marianatek.com)" },
      { slug: "mobile-app-check-in", note: "Customer self check-in with geofence & reminders. (support.marianatek.com)" },
      { slug: "kiosk-ipad-check-in", note: "Biz App Kiosk Mode incl. agreement signing. (support.marianatek.com)" },
      { slug: "barcode-scanner", note: "Barcode scanners for POS. (support.marianatek.com)" }
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "Waivers & forms included (Core). (Xplor Mariana Tek)" },
      { slug: "e-sign-waivers", note: "Sign on web/app/Kiosk; copies emailed. (support.marianatek.com)" }
    ],
    "booking-models": [
      { slug: "account-required", note: "Purchases require account (walk-in POS exception). (support.marianatek.com)" },
      { slug: "family-group-bookings", note: "Guest reservations. (support.marianatek.com)" },
      { slug: "multi-attendee-in-one-booking", note: "Book guests with a reservation. (support.marianatek.com)" },
      { slug: "add-on-upsells-at-checkout", note: "Add-ons appear in Kiosk confirmation (upsell implied). (support.marianatek.com)" }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Transactional emails; livestream link email templates. (Xplor Mariana Tek / support)" },
      { slug: "sms-reminders", note: "Waitlist openings via SMS (Growth). (Xplor Mariana Tek)" },
      { slug: "push-notifications", note: "Mobile check-in reminders via push. (support.marianatek.com)" },
      { slug: "two-way-sms", note: "Two-way SMS with Core+Growth. (Xplor Mariana Tek)" },
      { slug: "automated-waitlist-messages", note: "Growth SMS waitlist notifications. (Xplor Mariana Tek)" }
    ],
    "payment-gateways": [
      { slug: "stripe", note: "Native Stripe gateway & Terminal (WisePOS E). (support.marianatek.com)" }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Visa, Mastercard, AmEx, Discover, JCB, Diners, CUP. (support.marianatek.com)" },
      { slug: "apple-pay", note: "Apple Pay (in-studio & apps). (support.marianatek.com)" },
      { slug: "google-pay", note: "Google Pay (in-studio & apps). (support.marianatek.com)" },
      { slug: "samsung-pay", note: "Samsung Pay on terminals. (Xplor Mariana Tek)" }
    ],
    "point-of-sale-in-person": [
      { slug: "card-reader", note: "Stripe WisePOS E supported & recommended. (support.marianatek.com)" },
      { slug: "receipt-printer", note: "Recommend standard office printer for receipts. (support.marianatek.com)" },
      { slug: "barcode-scanner", note: "Barcode scanner supported for retail POS. (support.marianatek.com)" },
      { slug: "split-payments", note: "POS supports multi-tender split payments. (support.marianatek.com)" }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Single class via credits. (support.marianatek.com)" },
      { slug: "class-packs-punch-cards", note: "Credit Packages (qty & expiration). (support.marianatek.com)" },
      { slug: "memberships-subscriptions", note: "Memberships with agreements & reports. (support.marianatek.com)" },
      { slug: "intro-offers", note: "Intro offers featured in product pages. (Xplor Mariana Tek)" }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Recurring membership charges w/ failure handling. (support.marianatek.com)" },
      { slug: "dunning-retry-logic", note: "Failed payments tab with retry/waive. (support.marianatek.com)" },
      { slug: "partial-payments", note: "POS split/multi-tender. (support.marianatek.com)" }
    ],
    "discounts-and-credits": [
      { slug: "auto-discounts", note: "Automatic discounts (e.g., monthly free late cancel). (support.marianatek.com)" },
      { slug: "gift-cards", note: "Digital & physical gift cards; balances tracked. (support.marianatek.com)" },
      { slug: "store-credit", note: "Account balances referenced in docs. (support.marianatek.com)" }
    ],
    "risk-and-compliance": [
      { slug: "3-d-secure-sca", note: "Documented 3DS/SCA requirements. (support.marianatek.com)" },
      { slug: "pci-dss-compliance", note: "PCI L1 posture (via Stripe). (Xplor Mariana Tek)" },
      { slug: "avs", note: "AVS mismatch handling documented. (support.marianatek.com)" },
      { slug: "chargeback-management", note: "Stripe chargeback guidance area. (support.marianatek.com)" }
    ],
    "memberships": [
      { slug: "contract-terms", note: "Purchase agreements tied to memberships/packs. (support.marianatek.com)" },
      { slug: "usage-limits", note: "Limited memberships/credits with usage/penalties. (support.marianatek.com)" },
      { slug: "access-control-by-membership", note: "Class Tags gate access by product/class. (support.marianatek.com)" }
    ],
    "passes": [
      { slug: "class-packs", note: "Credit Packages. (support.marianatek.com)" },
      { slug: "expiration-rules", note: "Configurable expirations. (support.marianatek.com)" },
      { slug: "shareable-passes", note: "Guest booking privileges. (support.marianatek.com)" }
    ],
    "loyalty-and-referral": [
      { slug: "points", note: "Perkville integration for points. (Perkville)" },
      { slug: "streaks-badges", note: "Gamification features (Full Growth). (Xplor Mariana Tek)" },
      { slug: "challenges", note: "Challenges via Gamification. (Xplor Mariana Tek)" }
    ],
    "gift-cards": [
      { slug: "digital-gift-cards", note: "Digital gift cards. (support.marianatek.com)" },
      { slug: "physical-gift-cards", note: "Physical gift cards. (support.marianatek.com)" },
      { slug: "balance-management", note: "Gift card/account balances tracked. (support.marianatek.com)" }
    ],
    "admin-and-permissions": [
      { slug: "role-based-permissions", note: "Actions like grace cancel/no-show are permission-gated. (support.marianatek.com)" }
    ],
    "scheduling-and-availability": [
      { slug: "staff-scheduling", note: "Via NetGym integration (2-way sync). (Xplor Mariana Tek)" },
      { slug: "time-off", note: "Handled through NetGym (subbing & ops). (Xplor Mariana Tek)" }
    ],
    "compensation": [
      { slug: "payroll-export", note: "Payroll on Insights training; reporting. (support.marianatek.com)" }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "CRM included. (Xplor Mariana Tek)" },
      { slug: "lead-capture-forms", note: "Landing pages & forms (Growth). (Xplor Mariana Tek)" }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Included in Core + Growth. (Xplor Mariana Tek)" },
      { slug: "sms-marketing", note: "Included in Core + Growth. (Xplor Mariana Tek)" },
      { slug: "marketing-automation", note: "Core + Growth automation. (Xplor Mariana Tek)" },
      { slug: "abandoned-booking-recovery", note: "Abandoned cart/nurture tactics. (Xplor Mariana Tek)" },
      { slug: "landing-pages", note: "Landing pages included. (Xplor Mariana Tek)" }
    ]
  }
}
, {
  id: "exercisecom",
  name: "Exercise.com",
  url: "https://www.exercise.com/",
  additionalInfo: [
    "Custom-branded iOS & Android apps with in-app purchases, push, workout logging, and embedded Vimeo/YouTube. (exercise.com)",
    "Access control integrations (Kisi, Gantner, Verkada) tie door/turnstile access to memberships & schedules. (exercise.com)",
    "POS + Kiosk with Tap to Pay on iPhone & Android, guest checkout, and family/dependent (“Buy for…”) flows. (exercise.com)",
    "Assessments engine with conditional logic & formulas; require waivers/forms per class or at check-in. (exercise.com)",
    "Zoom automation for recurring live sessions (unique links per occurrence). (exercise.com)",
    "Integrations: QuickBooks, Mailchimp/Constant Contact, Google Calendar, Intercom, ClassPass. (exercise.com)",
    "Security: PCI Level 1; SCA-ready. (exercise.com)"
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Can’t find information." },
      { slug: "branded-microsite", note: "Custom branded web portal with your domain (CNAME). (exercise.com)" },
      { slug: "ios-app", note: "Custom-branded iOS apps. (exercise.com)" },
      { slug: "android-app", note: "Custom-branded Android apps. (exercise.com)" },
      { slug: "facebook-instagram-booking", note: "Can’t find information." },
      { slug: "google-reserve", note: "Can’t find information." },
      { slug: "phone-in-person-entry", note: "Staff can create sessions/appointments. (exercise.com)" },
      { slug: "kiosk-self-service", note: "POS/Kiosk for self-service checkouts & check-ins. (exercise.com)" },
      { slug: "embedded-iframe", note: "Can’t find information." },
      { slug: "custom-portal-via-api", note: "Can’t find information." }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Sell drop-ins/passes. (exercise.com)" },
      { slug: "course-multi-session-series", note: "Book into recurring time slots/series. (exercise.com)" },
      { slug: "workshops-events", note: "Can’t find information." },
      { slug: "private-1-1", note: "Personal training appointments. (exercise.com)" },
      { slug: "semi-private-small-group", note: "Group classes supported. (exercise.com)" },
      { slug: "virtual-live-video", note: "Zoom links for recurring sessions. (exercise.com)" },
      { slug: "on-demand-recorded-content", note: "Stream Vimeo/YouTube videos in apps. (exercise.com)" }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Recurring sessions supported. (exercise.com)" },
      { slug: "rolling-enrollments", note: "Can’t find information." },
      { slug: "fixed-date-courses", note: "Can’t find information." },
      { slug: "waitlist-for-courses", note: "Can’t find information." }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Can’t find information." },
      { slug: "equipment-based-capacity", note: "Can’t find information." },
      { slug: "overbooking-allowance", note: "Can’t find information." },
      { slug: "waitlist", note: "Can’t find information." },
      { slug: "auto-promotion-from-waitlist", note: "Can’t find information." },
      { slug: "booking-window-open-close", note: "Can’t find information." },
      { slug: "cut-off-time-before-start", note: "Can’t find information." },
      { slug: "late-cancel-rules", note: "Late/early cancel statuses & fees. (exercise.com)" },
      { slug: "no-show-fee", note: "No-show fee supported. (exercise.com)" },
      { slug: "grace-periods", note: "Can’t find information." },
      { slug: "buffer-times-between-classes", note: "Can’t find information." }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Locations set & included in reminders. (exercise.com)" },
      { slug: "instructors", note: "Staff management/permissions. (exercise.com)" },
      { slug: "equipment", note: "Can’t find information." },
      { slug: "multiple-resources-per-booking", note: "Can’t find information." },
      { slug: "conflict-detection-prevention", note: "Can’t find information." }
    ],
    "calendar-sync": [
      { slug: "google-calendar-2-way", note: "Google Calendar connection available; 2-way not specified. (exercise.com)" },
      { slug: "outlook-2-way", note: "Outlook integration mentioned; directionality not specified. (exercise.com)" },
      { slug: "icloud-2-way", note: "Can’t find information." },
      { slug: "ics-feed-1-way", note: "iCal link for personal calendar apps. (exercise.com)" }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Front desk tools. (exercise.com)" },
      { slug: "mobile-app-check-in", note: "Manage check-ins from mobile devices. (exercise.com)" },
      { slug: "kiosk-ipad-check-in", note: "Kiosk check-ins. (exercise.com)" },
      { slug: "qr-code-barcode-scanning", note: "Can’t find information." },
      { slug: "nfc-rfid", note: "Door systems support cards/fobs (Kisi/Gantner). (exercise.com)" },
      { slug: "turnstile-door-access-integration", note: "Kisi, Gantner, Verkada integrations. (exercise.com)" }
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "Custom assessments & profile fields. (exercise.com)" },
      { slug: "conditional-logic", note: "Conditional formatting/logic in assessments. (exercise.com)" },
      { slug: "e-sign-waivers", note: "Automated waiver requirements. (exercise.com)" },
      { slug: "health-screening", note: "Assessments (e.g., PAR-Q templates). (exercise.com)" },
      { slug: "parental-consent", note: "Can’t find information." },
      { slug: "photo-video-consent", note: "Can’t find information." },
      { slug: "per-class-forms", note: "Auto-require waivers for class reservations. (exercise.com)" },
      { slug: "custom-fields", note: "Custom fields on waivers/checkout. (exercise.com)" }
    ],
    "booking-models": [
      { slug: "guest-checkout", note: "Guest checkout (POS/Kiosk & online ‘Guest (Me)’). (exercise.com)" },
      { slug: "account-required", note: "Full account signup flows. (exercise.com)" },
      { slug: "family-group-bookings", note: "Dependents/family sharing & “Buy for” options. (exercise.com)" },
      { slug: "corporate-team-bookings", note: "Corporate wellness programs. (exercise.com)" },
      { slug: "multi-attendee-in-one-booking", note: "Can’t find information." },
      { slug: "add-on-upsells-at-checkout", note: "Upsells in POS/e-commerce. (exercise.com)" }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Manual + automations. (exercise.com)" },
      { slug: "sms-reminders", note: "SMS supported. (exercise.com)" },
      { slug: "push-notifications", note: "Push via custom apps. (exercise.com)" },
      { slug: "whatsapp-notifications", note: "Can’t find information." },
      { slug: "two-way-sms", note: "Can’t find information." },
      { slug: "custom-templates", note: "Can’t find information." },
      { slug: "automated-waitlist-messages", note: "Can’t find information." }
    ],
    "payment-gateways": [
      { slug: "stripe", note: "Supported (connect & verify Stripe). (exercise.com)" },
      { slug: "paypal", note: "Not supported (explicit). (exercise.com)" }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Supported online & POS. (exercise.com)" },
      { slug: "apple-pay", note: "Tap to Pay on iPhone. (exercise.com)" },
      { slug: "google-pay", note: "Tap to Pay on Android. (exercise.com)" },
      { slug: "bnpl", note: "BNPL supported (providers not specified). (exercise.com)" },
      { slug: "ach-debit", note: "Bank account/ACH supported. (exercise.com)" }
    ],
    "point-of-sale-in-person": [
      { slug: "card-reader", note: "Pre-certified readers. (exercise.com)" },
      { slug: "tap-to-pay", note: "Tap to Pay on iPhone & Android. (exercise.com)" }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Single classes. (exercise.com)" },
      { slug: "class-packs-punch-cards", note: "Class passes. (exercise.com)" },
      { slug: "memberships-subscriptions", note: "Memberships & subscriptions. (exercise.com)" }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Recurring billing for memberships/subscriptions. (exercise.com)" }
    ],
    "taxes-and-invoicing": [
      { slug: "invoices", note: "Invoicing module present. (exercise.com)" }
    ],
    "discounts-and-credits": [
      { slug: "coupon-codes", note: "Coupon codes area present. (exercise.com)" },
      { slug: "store-credit", note: "Manage client account balances. (exercise.com)" }
    ],
    "risk-and-compliance": [
      { slug: "3-d-secure-sca", note: "SCA-ready. (exercise.com)" },
      { slug: "pci-dss-compliance", note: "PCI Level 1. (exercise.com)" }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Dependents/family sharing. (exercise.com)" },
      { slug: "corporate-accounts", note: "Corporate dashboards/permissions. (exercise.com)" },
      { slug: "tags-segments", note: "Intercom tagging via integration. (exercise.com)" }
    ],
    "memberships": [
      { slug: "contract-terms", note: "E-sign contracts/waivers. (exercise.com)" },
      { slug: "freezes-holds", note: "Pause subscriptions. (exercise.com)" },
      { slug: "cancellation-policies", note: "Late/early cancel handling & fees. (exercise.com)" },
      { slug: "access-control-by-membership", note: "Door access packages with integrated systems. (exercise.com)" }
    ],
    "passes": [
      { slug: "class-packs", note: "Class packs. (exercise.com)" },
      { slug: "shareable-passes", note: "Share packages with dependents. (exercise.com)" }
    ],
    "loyalty-and-referral": [
      { slug: "referrals", note: "Affiliate program via Refersion. (exercise.com)" }
    ],
    "community": [
      { slug: "forums-groups", note: "Online groups & team challenges. (exercise.com)" },
      { slug: "leaderboards", note: "Workout leaderboards. (exercise.com)" },
      { slug: "challenges", note: "Full challenge tooling. (exercise.com)" }
    ],
    "admin-and-permissions": [
      { slug: "role-based-permissions", note: "Staff permissions incl. corporate dashboard. (exercise.com)" }
    ],
    "scheduling-and-availability": [
      { slug: "staff-scheduling", note: "Scheduling tools. (exercise.com)" },
      { slug: "availability-rules", note: "Availability intervals. (exercise.com)" }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Client management tools. (exercise.com)" },
      { slug: "lead-capture-forms", note: "Leads + assessments. (exercise.com)" },
      { slug: "lead-pipeline-stages", note: "Automations move lifecycle stages. (exercise.com)" }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Native + integrations (Mailchimp/Constant Contact). (exercise.com)" },
      { slug: "sms-marketing", note: "Supported via automations. (exercise.com)" },
      { slug: "marketing-automation", note: "Robust automations (email/SMS/push). (exercise.com)" },
      { slug: "promo-codes", note: "Coupon codes. (exercise.com)" },
      { slug: "landing-pages", note: "Landing pages module. (exercise.com)" }
    ]
  }
},
{
  id: "virtuagym",
  name: "Virtuagym",
  url: "https://virtuagym.com/",
  additionalInfo: [
    "MAX AI Coach generates trainer workouts integrated with coaching platform. (Virtuagym)",
    "Access-linked automation: restrict access for overdue invoices; auto-enroll check-ins into scheduled classes. (Virtuagym)",
    "Hardware ecosystem: RFID/QR/barcode/turnstiles, cash drawers, printers; German KassenSichV fiscal module. (Virtuagym)",
    "Credit system widely used for class packs (gift-card-like). (Virtuagym Helpdesk)"
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Free-trial & booking widgets. (Virtuagym)" },
      { slug: "branded-microsite", note: "Hosted portals/webshops on *.virtuagym.com. (Virtuagym)" },
      { slug: "ios-app", note: "Custom-branded iPhone app. (Virtuagym)" },
      { slug: "android-app", note: "Custom-branded Android app. (Virtuagym)" },
      { slug: "phone-in-person-entry", note: "Staff can add participants & track attendance. (Virtuagym Helpdesk)" },
      { slug: "kiosk-self-service", note: "Studio check-in software & Virtuagym Touch. (Virtuagym)" },
      { slug: "embedded-iframe", note: "Schedule/widgets embeddable. (Virtuagym Helpdesk)" },
      { slug: "custom-portal-via-api", note: "Public API docs. (Virtuagym)" },
      { slug: "facebook-instagram-booking", note: "Can’t find information." },
      { slug: "google-reserve", note: "Can’t find information." }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Scheduling + webshop products. (Virtuagym)" },
      { slug: "workshops-events", note: "Workshops supported. (Virtuagym)" },
      { slug: "private-1-1", note: "PT appointment booking. (Virtuagym)" },
      { slug: "virtual-live-video", note: "Add livestream links to classes. (Virtuagym Helpdesk)" },
      { slug: "on-demand-recorded-content", note: "VOD in the app. (Virtuagym Helpdesk)" }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Can’t find information." },
      { slug: "rolling-enrollments", note: "Can’t find information." },
      { slug: "fixed-date-courses", note: "Can’t find information." }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Room capacity & occupancy tracking. (Virtuagym)" },
      { slug: "waitlist", note: "Built-in class waitlist with email notifications. (Virtuagym Helpdesk)" },
      { slug: "auto-promotion-from-waitlist", note: "Auto-fill cancelled spots. (Virtuagym Helpdesk)" }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Room capacity & assignment. (Virtuagym)" },
      { slug: "instructors", note: "Assign trainers/instructors; staff scheduling. (Virtuagym)" }
    ],
    "calendar-sync": [
      { slug: "ics-feed-1-way", note: "Add schedule to Google/Apple Calendar. (Virtuagym Helpdesk)" }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Attendance via check-in or manual. (Virtuagym Helpdesk)" },
      { slug: "mobile-app-check-in", note: "QR-code check-in in the app. (Virtuagym Helpdesk)" },
      { slug: "kiosk-ipad-check-in", note: "Studio check-in & Virtuagym Touch. (Virtuagym)" },
      { slug: "qr-code-barcode-scanning", note: "QR/barcode supported; specs documented. (Virtuagym Helpdesk)" },
      { slug: "nfc-rfid", note: "Supported via access-control partners. (Virtuagym Helpdesk)" },
      { slug: "turnstile-door-access-integration", note: "Partners & hardware integrations. (Virtuagym)" }
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "Questionnaires/intake forms. (Virtuagym)" },
      { slug: "e-sign-waivers", note: "Digital contracts & waivers with e-signatures. (Virtuagym)" },
      { slug: "health-screening", note: "COVID-19 triage questions configurable. (Virtuagym Helpdesk)" }
    ],
    "booking-models": [
      { slug: "account-required", note: "Register/Login flow in webshops/portals. (Virtuagym)" },
      { slug: "family-group-bookings", note: "Family memberships & ‘Add guest’. (Virtuagym Helpdesk)" },
      { slug: "corporate-team-bookings", note: "Company invoicing & corporate wellness. (Virtuagym Helpdesk)" },
      { slug: "multi-attendee-in-one-booking", note: "Add multiple guests to a class. (Virtuagym Helpdesk)" },
      { slug: "add-on-upsells-at-checkout", note: "Selling add-ons in membership module. (Virtuagym)" }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Notifications & email marketing tool. (Virtuagym)" },
      { slug: "sms-reminders", note: "SMS listed as a notification channel. (Virtuagym)" },
      { slug: "push-notifications", note: "Behavior-based push from the app. (Virtuagym)" },
      { slug: "whatsapp-notifications", note: "WhatsApp listed as a channel. (Virtuagym)" },
      { slug: "automated-waitlist-messages", note: "Email when a spot opens. (Virtuagym Helpdesk)" },
      { slug: "custom-templates", note: "Templates for email/SMS/in-app. (Virtuagym)" }
    ],
    "payment-gateways": [
      { slug: "paypal", note: "Supported incl. card via PayPal. (Virtuagym Helpdesk)" },
      { slug: "gocardless", note: "Direct debit. (Virtuagym Helpdesk)" },
      { slug: "paysafe", note: "Credit/debit. (Virtuagym Helpdesk)" },
      { slug: "mollie", note: "Supported. (Virtuagym Helpdesk)" }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Via Paysafe/PayPal. (Virtuagym Helpdesk)" },
      { slug: "sepa-direct-debit", note: "Via GoCardless & Mollie. (Virtuagym Helpdesk)" },
      { slug: "ideal-bancontact-sofort-etc", note: "Via Mollie (iDEAL, Bancontact, Belfius, KBC, SOFORT). (Virtuagym Helpdesk)" },
      { slug: "cash", note: "POS supports cash. (Virtuagym Helpdesk)" }
    ],
    "point-of-sale-in-person": [
      { slug: "card-reader", note: "Handpoint HiLite NFC (US). (Virtuagym)" },
      { slug: "cash-drawer", note: "Supported. (Virtuagym Helpdesk)" },
      { slug: "receipt-printer", note: "Star TSP100 recommended. (Virtuagym Helpdesk)" },
      { slug: "barcode-scanner", note: "1D/2D/QR supported; guides available. (Virtuagym Helpdesk)" }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Drop-in single session examples. (Virtuagym)" },
      { slug: "class-packs-punch-cards", note: "Credit system for passes. (Virtuagym Helpdesk)" },
      { slug: "memberships-subscriptions", note: "Recurring memberships & billing. (Virtuagym)" },
      { slug: "free-trials", note: "Free-trial booking widget. (Virtuagym)" },
      { slug: "student-senior-rates", note: "Possible via custom products. (Virtuagym webshop examples)" }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Automated billing & invoicing. (Virtuagym)" },
      { slug: "dunning-retry-logic", note: "Automated Dunning module. (Virtuagym)" }
    ],
    "taxes-and-invoicing": [
      { slug: "vat-gst-hst", note: "Tax settings; VAT examples. (Virtuagym Helpdesk)" },
      { slug: "multiple-tax-rates", note: "Add multiple taxes. (Virtuagym Helpdesk)" },
      { slug: "fiscal-receipts", note: "German KassenSichV compliance module. (Virtuagym Helpdesk)" },
      { slug: "invoices", note: "Online payments & invoicing. (Virtuagym)" },
      { slug: "credit-notes", note: "‘Credit an invoice’ flow. (Virtuagym Helpdesk)" }
    ],
    "discounts-and-credits": [
      { slug: "gift-cards", note: "Gift certificates via webshop. (Virtuagym examples)" }
    ],
    "risk-and-compliance": [
      { slug: "chargeback-management", note: "Chargeback handling article. (Virtuagym Helpdesk)" }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Family memberships & linked invoicing. (Virtuagym Helpdesk)" },
      { slug: "corporate-accounts", note: "Corporate wellness & company invoicing. (Virtuagym)" },
      { slug: "tags-segments", note: "Client segmentation referenced. (Virtuagym)" }
    ],
    "memberships": [
      { slug: "contract-terms", note: "Membership contracts configurable. (Virtuagym Helpdesk)" },
      { slug: "access-control-by-membership", note: "Access tied to check-in/credits; overdue invoice restrictions. (Virtuagym)" }
    ],
    "passes": [
      { slug: "class-packs", note: "Pay-as-you-go passes via credits. (Virtuagym Helpdesk)" },
      { slug: "expiration-rules", note: "Products can carry expiry. (Virtuagym examples)" }
    ],
    "loyalty-and-referral": [
      { slug: "streaks-badges", note: "Challenges & rewards with badges. (Virtuagym)" }
    ],
    "gift-cards": [
      { slug: "digital-gift-cards", note: "Gift certificates sold via webshop. (Virtuagym)" },
      { slug: "physical-gift-cards", note: "Studios sometimes ship or pickup. (Virtuagym examples)" }
    ],
    "community": [
      { slug: "forums-groups", note: "Community & Groups with privacy types. (Virtuagym Helpdesk)" },
      { slug: "leaderboards", note: "Leaderboards built-in. (Virtuagym)" },
      { slug: "challenges", note: "Challenges built-in. (Virtuagym)" }
    ],
    "admin-and-permissions": [
      { slug: "role-based-permissions", note: "Staff roles/privileges. (Virtuagym Helpdesk)" }
    ],
    "scheduling-and-availability": [
      { slug: "staff-scheduling", note: "Assign instructors; staff scheduling. (Virtuagym)" },
      { slug: "availability-rules", note: "Staff availability management. (Virtuagym Helpdesk)" }
    ],
    "compensation": [
      { slug: "performance-dashboards", note: "Business Analytics & occupancy dashboards. (Virtuagym Helpdesk)" }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Client profiles & member admin. (Virtuagym)" },
      { slug: "lead-capture-forms", note: "Free-trial/website widgets. (Virtuagym)" },
      { slug: "lead-pipeline-stages", note: "Lead management with pipeline views & automation. (Virtuagym)" }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Built-in email marketing. (Virtuagym)" },
      { slug: "marketing-automation", note: "Automated follow-ups in lead management. (Virtuagym)" }
    ]
  }
},
{
  id: "omnify",
  name: "Omnify",
  url: "https://www.getomnify.com/",
  additionalInfo: [
    "Service Store = branded storefront + widgets; embed full stores or specific services. (getomnify.com)",
    "QR self check-ins (printable posters) enable contactless kiosk-style check-ins. (getomnify.com)",
    "2-way Google Calendar sync for appointments. (getomnify.com)",
    "Omnify Payments plus Stripe/PayPal/Paytrace/Razorpay/FPX gateways. (getomnify.com)",
    "Member Benefits with auto-applied discounts; time-based conflict management. (getomnify.com)",
    "Digital gift cards with balance tracking (2025 update). (getomnify.com)"
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Widgets + explicit iframe how-to. (getomnify.com)" },
      { slug: "embedded-iframe", note: "Iframe widget supported. (getomnify.com)" },
      { slug: "branded-microsite", note: "Service Store storefront / client portal. (getomnify.com)" },
      { slug: "phone-in-person-entry", note: "Front desk can create orders/invoices & manage bookings. (getomnify.com)" },
      { slug: "kiosk-self-service", note: "QR self-check-in; kiosk mention. (getomnify.com)" },
      { slug: "custom-portal-via-api", note: "API access for multi-location/franchise plans. (getomnify.com)" },
      { slug: "ios-app", note: "Can’t find client booking app (Omnify GO is admin). (getomnify.com)" },
      { slug: "android-app", note: "Can’t find client booking app. (getomnify.com)" },
      { slug: "facebook-instagram-booking", note: "Can’t find information." },
      { slug: "google-reserve", note: "Can’t find information." }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Programs support classes & drop-ins. (getomnify.com)" },
      { slug: "course-multi-session-series", note: "Programs/Courses. (getomnify.com)" },
      { slug: "workshops-events", note: "Events supported. (getomnify.com)" },
      { slug: "private-1-1", note: "Appointments. (getomnify.com)" },
      { slug: "virtual-live-video", note: "Zoom & Google Meet integrations. (getomnify.com)" }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Recurring bookings/classes. (getomnify.com)" },
      { slug: "fixed-date-courses", note: "Programs/Camps schedules. (getomnify.com)" },
      { slug: "waitlist-for-courses", note: "Waitlists across classes/events/facilities. (getomnify.com)" }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Capacity management. (getomnify.com)" },
      { slug: "waitlist", note: "Native waitlist. (getomnify.com)" },
      { slug: "auto-promotion-from-waitlist", note: "No; alerts sent and client books. (getomnify.com)" },
      { slug: "booking-window-open-close", note: "Customizable window. (getomnify.com)" },
      { slug: "late-cancel-rules", note: "Cancellation charges & automation. (getomnify.com)" },
      { slug: "no-show-fee", note: "No-show fees via Stripe. (getomnify.com)" },
      { slug: "buffer-times-between-classes", note: "Create blocks/buffer times. (getomnify.com)" }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Room/meeting room scheduling. (getomnify.com)" },
      { slug: "instructors", note: "Staff calendars & availability. (getomnify.com)" },
      { slug: "conflict-detection-prevention", note: "Time-based conflict management. (getomnify.com)" }
    ],
    "calendar-sync": [
      { slug: "google-calendar-2-way", note: "2-way Google sync. (getomnify.com)" }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Check-ins web app & Omnify GO. (getomnify.com)" },
      { slug: "mobile-app-check-in", note: "Staff mobile app supports check-in. (getomnify.com)" },
      { slug: "kiosk-ipad-check-in", note: "Kiosk + printable QR posters. (getomnify.com)" },
      { slug: "qr-code-barcode-scanning", note: "QR supported; barcode not found. (getomnify.com)" },
      { slug: "turnstile-door-access-integration", note: "Automatic door-access via integrations. (getomnify.com)" }
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "Custom fields/forms. (getomnify.com)" },
      { slug: "e-sign-waivers", note: "Liability Waiver. (getomnify.com)" },
      { slug: "health-screening", note: "COVID/vaccination templates. (getomnify.com)" },
      { slug: "parental-consent", note: "Under-13 parental consent (GDPR note). (getomnify.com)" },
      { slug: "per-class-forms", note: "Collect before/after booking per service. (getomnify.com)" },
      { slug: "custom-fields", note: "Custom fields. (getomnify.com)" }
    ],
    "booking-models": [
      { slug: "family-group-bookings", note: "Family accounts & booking for family/friends. (getomnify.com)" },
      { slug: "multi-attendee-in-one-booking", note: "Add family members on check-in/booking. (getomnify.com)" },
      { slug: "add-on-upsells-at-checkout", note: "Add-ons / products with services. (getomnify.com)" }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Auto & reminder emails. (getomnify.com)" },
      { slug: "sms-reminders", note: "Supported (and via Zapier). (getomnify.com)" },
      { slug: "custom-templates", note: "Auto-email templates; invoice templates. (getomnify.com)" },
      { slug: "automated-waitlist-messages", note: "Automatic alerts when a slot opens. (getomnify.com)" }
    ],
    "payment-gateways": [
      { slug: "stripe", note: "Supported gateway. (getomnify.com)" },
      { slug: "paypal", note: "Supported gateway. (getomnify.com)" },
      { slug: "paytrace", note: "Supported gateway (ACH mention). (getomnify.com)" },
      { slug: "razorpay", note: "Supported. (getomnify.com)" },
      { slug: "fpx", note: "Supported. (getomnify.com)" }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Via gateways. (getomnify.com)" },
      { slug: "ach-debit", note: "ACH via PayTrace. (getomnify.com)" },
      { slug: "cash", note: "Record offline via Custom Payments. (getomnify.com)" },
      { slug: "cheque", note: "Record offline via Custom Payments. (getomnify.com)" }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Supported. (getomnify.com)" },
      { slug: "class-packs-punch-cards", note: "Classpacks. (getomnify.com)" },
      { slug: "memberships-subscriptions", note: "Recurring, auto-renew. (getomnify.com)" },
      { slug: "free-trials", note: "Free or paid trials. (getomnify.com)" },
      { slug: "tiered-pricing", note: "Tiered membership pricing. (getomnify.com)" }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Autopay subscriptions. (getomnify.com)" },
      { slug: "dunning-retry-logic", note: "Smart dunning. (getomnify.com)" },
      { slug: "deposits", note: "Collect deposits from Frontdesk/Orders. (getomnify.com)" }
    ],
    "taxes-and-invoicing": [
      { slug: "vat-gst-hst", note: "Various taxes per product/service. (getomnify.com)" },
      { slug: "multiple-tax-rates", note: "Supported. (getomnify.com)" },
      { slug: "invoices", note: "PDF invoices, payment links, auto-invoicing. (getomnify.com)" }
    ],
    "discounts-and-credits": [
      { slug: "coupon-codes", note: "Discounts/coupons. (getomnify.com)" },
      { slug: "auto-discounts", note: "Member benefits auto-apply. (getomnify.com)" },
      { slug: "volume-discounts", note: "Family & multi-purchase discounts. (getomnify.com)" },
      { slug: "gift-cards", note: "Digital gift cards; balance tracking. (getomnify.com)" },
      { slug: "store-credit", note: "Store Credits. (getomnify.com)" }
    ],
    "risk-and-compliance": [
      { slug: "pci-dss-compliance", note: "PCI-compliant gateways; infra on AWS with PCI DSS L1. (getomnify.com)" },
      { slug: "chargeback-management", note: "Terms address chargebacks (Omnify Payments). (getomnify.com)" }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Family profiles & bookings. (getomnify.com)" }
    ],
    "memberships": [
      { slug: "freezes-holds", note: "Track pauses. (getomnify.com)" },
      { slug: "cancellation-policies", note: "Cancellation/refund automation. (getomnify.com)" },
      { slug: "access-control-by-membership", note: "Members-only access & pricing. (getomnify.com)" }
    ],
    "passes": [
      { slug: "class-packs", note: "Supported. (getomnify.com)" }
    ],
    "gift-cards": [
      { slug: "digital-gift-cards", note: "Digital gift cards. (getomnify.com)" },
      { slug: "balance-management", note: "Track balances & redemptions. (getomnify.com)" }
    ],
    "admin-and-permissions": [
      { slug: "role-based-permissions", note: "Restrict dashboard access/levels. (getomnify.com)" }
    ],
    "scheduling-and-availability": [
      { slug: "staff-scheduling", note: "Manage staff calendars; unified calendar. (getomnify.com)" },
      { slug: "availability-rules", note: "Set availability; 2-way Google sync. (getomnify.com)" }
    ],
    "compensation": [
      { slug: "tips", note: "Collect tips via Orders/Frontdesk. (getomnify.com)" }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Client profiles, notes, activity. (getomnify.com)" },
      { slug: "lead-capture-forms", note: "Prospects lead capture popup. (getomnify.com)" }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Auto-emails; full campaigns via integrations (Mailchimp/Zapier). (getomnify.com)" },
      { slug: "sms-marketing", note: "Via integrations (Zapier/SMS). (getomnify.com)" },
      { slug: "marketing-automation", note: "Via Zapier. (getomnify.com)" },
      { slug: "promo-codes", note: "Discounts/Promo codes. (getomnify.com)" }
    ]
  }
},
{
  id: "pike13",
  name: "Pike13",
  url: "https://www.pike13.com/",
  additionalInfo: [
    "Family accounts: Account Manager & Dependents model (rich parent/guardian flows). (help.pike13.com)",
    "Rooms with conflict highlighting to prevent double-booking. (help.pike13.com)",
    "Course waitlists added in 2024. (help.pike13.com)",
    "Client Kiosk app rebuilt in 2024; better calendar.ics performance. (help.pike13.com)",
    "Regional payments coverage: Stripe (multi-region), Celero/NMI (U.S.), Paysafe (EU/CA), Payrix/Worldpay (AU). (help.pike13.com)",
    "API v2 & webhooks (2024 upgrades). ClassPass listing & GA/GA4, Google Ads, Facebook Pixel add-ons. (help.pike13.com)"
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Embeddable schedule/appointment/staff widgets. (help.pike13.com)" },
      { slug: "branded-microsite", note: "Each business gets a Pike13 client website. (help.pike13.com)" },
      { slug: "ios-app", note: "Client App for booking. (help.pike13.com)" },
      { slug: "android-app", note: "Client App for booking. (help.pike13.com)" },
      { slug: "phone-in-person-entry", note: "Staff enroll & take payments. (help.pike13.com)" },
      { slug: "kiosk-self-service", note: "iPad/Android kiosk app. (help.pike13.com)" },
      { slug: "custom-portal-via-api", note: "Public API v2. (developer.pike13.com)" },
      { slug: "embedded-iframe", note: "Widgets embed via snippet; iframe not explicit. (help.pike13.com)" },
      { slug: "facebook-instagram-booking", note: "Legacy blog mentions Facebook tab; current doc unclear. (help.pike13.com)" },
      { slug: "google-reserve", note: "Legacy 2017 mentions; current status unclear. (help.pike13.com)" }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Classes can allow drop-ins. (help.pike13.com)" },
      { slug: "course-multi-session-series", note: "Fixed start/end; pay upfront; course waitlists supported. (help.pike13.com)" },
      { slug: "workshops-events", note: "Commonly modeled as Courses. (help.pike13.com)" },
      { slug: "private-1-1", note: "Appointments (one client online; staff can add more). (help.pike13.com)" },
      { slug: "semi-private-small-group", note: "Small-capacity Class or staff-added extras. (help.pike13.com)" }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Recurring schedules & recurring enrollments. (help.pike13.com)" },
      { slug: "rolling-enrollments", note: "Ongoing enrollment based on windows. (help.pike13.com)" },
      { slug: "fixed-date-courses", note: "Courses with start/end. (help.pike13.com)" },
      { slug: "waitlist-for-courses", note: "Course waitlists (2024). (help.pike13.com)" }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Show remaining spaces. (help.pike13.com)" },
      { slug: "overbooking-allowance", note: "Staff can enroll even if full. (help.pike13.com)" },
      { slug: "waitlist", note: "Class & course waitlists. (help.pike13.com)" },
      { slug: "auto-promotion-from-waitlist", note: "Auto-enroll when space opens. (help.pike13.com)" },
      { slug: "booking-window-open-close", note: "Enrollment window cutoff. (help.pike13.com)" },
      { slug: "late-cancel-rules", note: "Late-cancel fees or visit deductions. (help.pike13.com)" },
      { slug: "no-show-fee", note: "No-show fees/visit deductions. (help.pike13.com)" },
      { slug: "buffer-times-between-classes", note: "Extra time before/after appointments. (help.pike13.com)" }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Rooms with conflict highlighting. (help.pike13.com)" },
      { slug: "instructors", note: "Staff availability scheduling. (help.pike13.com)" },
      { slug: "equipment", note: "Model equipment as ‘staff’ to book. (help.pike13.com)" },
      { slug: "multiple-resources-per-booking", note: "Staff + Room; conflicts shown. (help.pike13.com)" },
      { slug: "conflict-detection-prevention", note: "Rooms conflicts & appointment rules. (help.pike13.com)" }
    ],
    "calendar-sync": [
      { slug: "ics-feed-1-way", note: "Subscribe to schedule (iCal/Google). (help.pike13.com)" }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Attendance states incl. no-show/late-cancel. (help.pike13.com)" },
      { slug: "kiosk-ipad-check-in", note: "Client Kiosk app. (help.pike13.com)" },
      { slug: "qr-code-barcode-scanning", note: "Kiosk supports QR/barcodes; key tags. (help.pike13.com)" }
    ],
    "forms-and-waivers": [
      { slug: "e-sign-waivers", note: "Adult & guardian waivers in client site & kiosk. (help.pike13.com)" },
      { slug: "custom-intake-forms", note: "Custom client fields; visibility controls. (help.pike13.com)" },
      { slug: "parental-consent", note: "Guardian waiver for minors. (help.pike13.com)" },
      { slug: "photo-video-consent", note: "Add via custom fields & documents. (help.pike13.com)" }
    ],
    "booking-models": [
      { slug: "account-required", note: "Account creation to enroll/pay; waivers at signup. (help.pike13.com)" },
      { slug: "family-group-bookings", note: "Account Manager + Dependents. (help.pike13.com)" }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Per-service timing config. (help.pike13.com)" },
      { slug: "sms-reminders", note: "Built-in SMS (upgraded 2024). (help.pike13.com)" },
      { slug: "automated-waitlist-messages", note: "Auto-enroll & notify. (help.pike13.com)" }
    ],
    "payment-gateways": [
      { slug: "stripe", note: "Many regions. (help.pike13.com)" },
      { slug: "worldpay", note: "Via Payrix (Australia). (help.pike13.com)" },
      { slug: "paysafe", note: "Europe/Canada (merchant partner). (help.pike13.com)" },
      { slug: "nmi", note: "Celero Commerce via NMI (U.S.). (help.pike13.com)" }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Via supported processors. (help.pike13.com)" },
      { slug: "ach-debit", note: "U.S. ACH (staff can add). (help.pike13.com)" },
      { slug: "cash", note: "Record cash. (help.pike13.com)" },
      { slug: "cheque", note: "Record check. (help.pike13.com)" }
    ],
    "point-of-sale-in-person": [
      { slug: "partial-payments", note: "In-person checkout supports partial/split payments. (help.pike13.com)" }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Single visits. (help.pike13.com)" },
      { slug: "class-packs-punch-cards", note: "Prepaid passes. (help.pike13.com)" },
      { slug: "memberships-subscriptions", note: "Recurring plans (limited/unlimited). (help.pike13.com)" }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Autopay with scheduled invoices. (help.pike13.com)" },
      { slug: "proration", note: "Supported with manual override. (help.pike13.com)" },
      { slug: "partial-payments", note: "Account credit & split payments. (help.pike13.com)" },
      { slug: "installments", note: "Course installments not native; workaround via plans. (help.pike13.com)" }
    ],
    "taxes-and-invoicing": [
      { slug: "vat-gst-hst", note: "Sales tax per location; reporting. (help.pike13.com)" },
      { slug: "multiple-tax-rates", note: "Supported. (help.pike13.com)" },
      { slug: "tax-inclusive-exclusive", note: "Toggle available. (help.pike13.com)" },
      { slug: "invoices", note: "Full invoicing & reports. (help.pike13.com)" },
      { slug: "quotes", note: "Purchase Requests (quote-like). (help.pike13.com)" }
    ],
    "discounts-and-credits": [
      { slug: "coupon-codes", note: "Coupons supported. (help.pike13.com)" },
      { slug: "store-credit", note: "Account credit add/use/track. (help.pike13.com)" },
      { slug: "gift-cards", note: "Digital gift cards (enhanced 2024). (help.pike13.com)" }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Account Manager & Dependents. (help.pike13.com)" },
      { slug: "emergency-contacts", note: "Capture via custom fields. (help.pike13.com)" },
      { slug: "medical-notes", note: "Capture via custom fields. (help.pike13.com)" }
    ],
    "memberships": [
      { slug: "contract-terms", note: "Number of payments & billing day. (help.pike13.com)" },
      { slug: "freezes-holds", note: "Plan holds with proration. (help.pike13.com)" },
      { slug: "carryover-rules", note: "Rollover visit rules. (help.pike13.com)" },
      { slug: "cancellation-policies", note: "Service policies & ending plans. (help.pike13.com)" },
      { slug: "usage-limits", note: "Weekly/monthly visit limits. (help.pike13.com)" },
      { slug: "access-control-by-membership", note: "Plans restrict purchasable/usable services. (help.pike13.com)" }
    ],
    "passes": [
      { slug: "class-packs", note: "Passes/punch cards. (help.pike13.com)" },
      { slug: "expiration-rules", note: "Configurable expirations. (help.pike13.com)" }
    ],
    "admin-and-permissions": [
      { slug: "role-based-permissions", note: "Owners, Managers, Staff, Limited Staff. (help.pike13.com)" },
      { slug: "field-level-permissions", note: "Control visibility for custom fields. (help.pike13.com)" }
    ],
    "scheduling-and-availability": [
      { slug: "staff-scheduling", note: "Appointment services + staff availability. (help.pike13.com)" }
    ],
    "compensation": [
      { slug: "payroll-export", note: "Payroll reporting & running payroll. (help.pike13.com)" },
      { slug: "commission-structures", note: "Sales commissions attribution. (help.pike13.com)" }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Clients module & reports. (help.pike13.com)" },
      { slug: "lead-capture-forms", note: "Client signup with required fields. (help.pike13.com)" }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Emma integration (segmentation & autoresponders). (help.pike13.com)" },
      { slug: "promo-codes", note: "Coupons. (help.pike13.com)" }
    ],
    "ads-and-tracking": [
      { slug: "facebook-ads-pixel", note: "Add-on supported. (help.pike13.com)" },
      { slug: "google-analytics", note: "GA/GA4 supported. (help.pike13.com)" },
      { slug: "google-ads-conversion", note: "Google Ads add-on. (help.pike13.com)" }
    ]
  }
},
{
  id: "studiobookings",
  name: "StudioBookings",
  url: "https://www.studiobookings.com/",
  additionalInfo: [
    "Apple Watch app; free native iOS & Android apps branded with your logo. (studiobookings.com)",
    "Free SMS to clients highlighted; AMEX at no extra cost; recurring billing included. (studiobookings.com)",
    "Parent-to-Child account sharing promoted for family bookings. (studiobookings.com)"
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "branded-microsite", note: "Hosted booking page linked from your site. (studiobookings.com)" },
      { slug: "ios-app", note: "Free iOS app for studios & members. (studiobookings.com)" },
      { slug: "android-app", note: "Free Android app for studios & members. (studiobookings.com)" },
      { slug: "phone-in-person-entry", note: "Staff can register members/guests & take payments. (studiobookings.com)" }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "One-time offerings. (studiobookings.com)" },
      { slug: "workshops-events", note: "Workshops with start/end dates. (studiobookings.com)" },
      { slug: "private-1-1", note: "Private sessions. (studiobookings.com)" },
      { slug: "virtual-live-video", note: "Supports online/virtual classes. (studiobookings.com)" },
      { slug: "on-demand-recorded-content", note: "Blog guidance for recorded/on-demand. (studiobookings.com)" }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Recurring appointments online. (studiobookings.com)" },
      { slug: "fixed-date-courses", note: "Via Workshops. (studiobookings.com)" }
    ],
    "capacity-and-time-controls": [
      { slug: "waitlist", note: "Waitlist & alerts. (studiobookings.com)" }
    ],
    "resource-allocation": [
      { slug: "instructors", note: "Manage staff & instructors; set pay rates. (studiobookings.com)" },
      { slug: "multiple-resources-per-booking", note: "Multiple instructors per class. (studiobookings.com)" }
    ],
    "calendar-sync": [
      { slug: "google-calendar-2-way", note: "Capterra lists Google Calendar integration (directionality unclear)." }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Roll call. (studiobookings.com)" },
      { slug: "mobile-app-check-in", note: "iOS/Android check-in. (studiobookings.com)" }
    ],
    "forms-and-waivers": [
      { slug: "e-sign-waivers", note: "Online electronic Waiver of Liability. (studiobookings.com)" }
    ],
    "booking-models": [
      { slug: "account-required", note: "Member logins to manage bookings & purchases. (studiobookings.com)" },
      { slug: "family-group-bookings", note: "Parent-to-Child sharing. (studiobookings.com)" }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Email alerts (birthdays, cancellation, renewals). (studiobookings.com)" },
      { slug: "sms-reminders", note: "Send SMS; automated SMS reminders referenced. (studiobookings.com)" },
      { slug: "push-notifications", note: "Native in-app notifications. (studiobookings.com)" },
      { slug: "automated-waitlist-messages", note: "Real-time waitlist alerts. (studiobookings.com)" }
    ],
    "payment-gateways": [
      { slug: "stripe", note: "Supported. (studiobookings.com)" },
      { slug: "paypal", note: "Supported. (studiobookings.com)" }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Includes AmEx. (studiobookings.com)" },
      { slug: "paypal", note: "PayPal payments. (studiobookings.com)" },
      { slug: "cash", note: "Record cash payments. (studiobookings.com)" }
    ],
    "pricing-models": [
      { slug: "single-class", note: "One-time offerings. (studiobookings.com)" },
      { slug: "class-packs-punch-cards", note: "Online class passes. (studiobookings.com)" },
      { slug: "memberships-subscriptions", note: "Recurring billing included. (studiobookings.com)" }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Included. (studiobookings.com)" }
    ],
    "taxes-and-invoicing": [
      { slug: "invoices", note: "Invoices/receipts referenced. (studiobookings.com)" }
    ],
    "discounts-and-credits": [
      { slug: "coupon-codes", note: "Promo codes. (studiobookings.com)" }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Parent-to-Child sharing. (studiobookings.com)" }
    ],
    "memberships": [
      { slug: "membership-management", note: "Create plans; automate renewals. (studiobookings.com)" }
    ],
    "passes": [
      { slug: "class-packs", note: "Passes; can override expiration. (studiobookings.com)" },
      { slug: "expiration-rules", note: "Expiry implied by bundle constraints. (studiobookings.com)" }
    ],
    "admin-and-permissions": [
      { slug: "role-based-permissions", note: "Staff permissions & individual logins. (studiobookings.com)" }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Member profiles, history, purchases. (studiobookings.com)" }
    ]
  }
},
{
  id: "momence",
  name: "Momence",
  url: "https://www.momence.com/",
  additionalInfo: [
    "Door access automations: Deep Kisi (geofencing, paid access), Passport key fobs with tag-based access. (help.momence.com)",
    "Self-service check-in: App barcodes, printable badges, and a self-check-in kiosk. (help.momence.com)",
    "Intake forms with uploads & Trackables to visualize metrics over time. (help.momence.com)",
    "Stripe Terminal (BBPOS WisePOS E) for true card-present payments. (help.momence.com)",
    "Sequences automation (if/then) across bookings/memberships/behaviors; Tuition Ledgers for courses/semesters/installments. (help.momence.com)",
    "Hosted purchase pages & embedded widgets for fast go-live. (help.momence.com)"
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Plugins/widgets to embed schedule, reviews, etc. (help.momence.com)" },
      { slug: "embedded-iframe", note: "Explicitly supported for plugins/forms. (help.momence.com)" },
      { slug: "branded-microsite", note: "Hosted public pages & purchase pages. (help.momence.com)" },
      { slug: "ios-app", note: "Customer mobile app. (help.momence.com)" },
      { slug: "android-app", note: "Customer mobile app. (help.momence.com)" },
      { slug: "phone-in-person-entry", note: "Front desk can book & charge via POS. (help.momence.com)" },
      { slug: "kiosk-self-service", note: "Self check-in kiosk. (help.momence.com)" },
      { slug: "custom-portal-via-api", note: "Public API docs. (help.momence.com)" }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Standard classes. (help.momence.com)" },
      { slug: "course-multi-session-series", note: "Semesters / Courses / Challenge. (help.momence.com)" },
      { slug: "workshops-events", note: "Events are core type. (help.momence.com)" },
      { slug: "private-1-1", note: "Appointments/services. (help.momence.com)" },
      { slug: "semi-private-small-group", note: "Appointments can have multiple customers & per-customer pricing. (help.momence.com)" },
      { slug: "virtual-live-video", note: "Zoom integration + multiple rooms. (help.momence.com)" },
      { slug: "on-demand-recorded-content", note: "On-demand videos, collections, subscriptions. (help.momence.com)" }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Recurring schedules; edit recurring. (help.momence.com)" },
      { slug: "fixed-date-courses", note: "Semesters with fixed dates. (help.momence.com)" }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Max participants per class. (help.momence.com)" },
      { slug: "waitlist", note: "Three modes documented. (help.momence.com)" },
      { slug: "auto-promotion-from-waitlist", note: "Auto-add / double opt-in / fast-fingers. (help.momence.com)" },
      { slug: "booking-window-open-close", note: "Sales cut-off setting. (help.momence.com)" },
      { slug: "cut-off-time-before-start", note: "Sales cut-off. (help.momence.com)" },
      { slug: "late-cancel-rules", note: "Cancellation policy + auto-charge. (help.momence.com)" },
      { slug: "no-show-fee", note: "Auto-charge rules can include no-show. (help.momence.com)" }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Physical locations & rooms. (help.momence.com)" },
      { slug: "instructors", note: "Assign staff to boards/services/classes. (help.momence.com)" }
    ],
    "calendar-sync": [
      { slug: "google-calendar-2-way", note: "Sync Momence → Google; staff invites. (help.momence.com)" }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Front desk roster toggles. (help.momence.com)" },
      { slug: "mobile-app-check-in", note: "Customer barcode in app. (help.momence.com)" },
      { slug: "kiosk-ipad-check-in", note: "Self check-in kiosk. (help.momence.com)" },
      { slug: "qr-code-barcode-scanning", note: "Barcodes; scanner guidance; printable badges. (help.momence.com)" },
      { slug: "nfc-rfid", note: "Key fobs & door access. (help.momence.com)" },
      { slug: "turnstile-door-access-integration", note: "Kisi & Passport integrations; geofencing. (help.momence.com)" }
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "Multi-field forms; map to profile; embeds; PDFs; Trackables. (help.momence.com)" },
      { slug: "e-sign-waivers", note: "Membership/customer/custom waivers; PDF download. (help.momence.com)" },
      { slug: "health-screening", note: "Collect health info via intake forms. (help.momence.com)" },
      { slug: "parental-consent", note: "Child waivers. (help.momence.com)" },
      { slug: "photo-video-consent", note: "Capture via custom waivers/forms. (help.momence.com)" },
      { slug: "custom-fields", note: "Customer custom info fields & mapping. (help.momence.com)" }
    ],
    "booking-models": [
      { slug: "account-required", note: "Customer account/login flow. (help.momence.com)" },
      { slug: "family-group-bookings", note: "Child accounts; parents book for children. (help.momence.com)" }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Transactional emails; timing control. (help.momence.com)" },
      { slug: "sms-reminders", note: "Two-way SMS; tiers; waitlist texts. (help.momence.com)" },
      { slug: "push-notifications", note: "Community posts trigger app notifications. (help.momence.com)" },
      { slug: "whatsapp-notifications", note: "WhatsApp integration listed. (help.momence.com)" },
      { slug: "custom-templates", note: "Transactional templates incl. waiver updates. (help.momence.com)" },
      { slug: "automated-waitlist-messages", note: "SMS/email to waitlisters. (help.momence.com)" }
    ],
    "payment-gateways": [
      { slug: "stripe", note: "Native; required for Terminal. (help.momence.com)" },
      { slug: "paypal", note: "Alternative to Stripe for online. (help.momence.com)" }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Online via Stripe; in-person via Stripe Terminal. (help.momence.com)" },
      { slug: "apple-pay", note: "Auto-enabled on checkout. (help.momence.com)" },
      { slug: "google-pay", note: "Auto-enabled on checkout. (help.momence.com)" }
    ],
    "point-of-sale-in-person": [
      { slug: "card-reader", note: "Stripe BBPOS WisePOS E supported. (help.momence.com)" },
      { slug: "barcode-scanner", note: "Supported (Code128) for badges/products. (help.momence.com)" },
      { slug: "split-payments", note: "POS split payment guidance. (help.momence.com)" }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Standard classes. (help.momence.com)" },
      { slug: "class-packs-punch-cards", note: "Packages. (help.momence.com)" },
      { slug: "memberships-subscriptions", note: "Recurring subscriptions. (help.momence.com)" },
      { slug: "intro-offers", note: "Supported in subscriptions/memberships docs. (help.momence.com)" },
      { slug: "free-trials", note: "Referenced across docs. (help.momence.com)" },
      { slug: "sliding-scale", note: "Sliding scale mentioned. (help.momence.com)" }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Subscriptions. (help.momence.com)" },
      { slug: "deposits", note: "Appointments can take deposits / pay-later. (help.momence.com)" },
      { slug: "partial-payments", note: "Appointments & POS support. (help.momence.com)" },
      { slug: "installments", note: "Payment Plans & Tuition Ledgers. (help.momence.com)" }
    ],
    "taxes-and-invoicing": [
      { slug: "vat-gst-hst", note: "Tax settings per location/category. (help.momence.com)" },
      { slug: "multiple-tax-rates", note: "Supported. (help.momence.com)" },
      { slug: "tax-inclusive-exclusive", note: "Tax-inclusive option. (help.momence.com)" }
    ],
    "discounts-and-credits": [
      { slug: "coupon-codes", note: "Discount codes. (help.momence.com)" },
      { slug: "auto-discounts", note: "Price Rules (automatic). (help.momence.com)" },
      { slug: "referral-discounts", note: "Customer referrals feature. (help.momence.com)" },
      { slug: "gift-cards", note: "Digital & physical (barcoded) with balance tracking. (help.momence.com)" },
      { slug: "store-credit", note: "Money credits. (help.momence.com)" },
      { slug: "volume-discounts", note: "Tuition Ledgers: discounts by # of signups/children. (help.momence.com)" }
    ],
    "currency": [
      { slug: "multi-currency-pricing", note: "Local currency display supported. (help.momence.com)" }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Parent/child accounts & waivers. (help.momence.com)" },
      { slug: "medical-notes", note: "SOAP notes (appointments). (help.momence.com)" },
      { slug: "tags-segments", note: "Customer tags & segmentation. (help.momence.com)" }
    ],
    "memberships": [
      { slug: "contract-terms", note: "Subscription contracts vs waivers. (help.momence.com)" },
      { slug: "freezes-holds", note: "Freeze supported; triggers exist. (help.momence.com)" },
      { slug: "cancellation-policies", note: "Policies + auto-charge. (help.momence.com)" },
      { slug: "usage-limits", note: "Limits on packs/subscriptions referenced. (help.momence.com)" },
      { slug: "access-control-by-membership", note: "Tag memberships to control door access. (help.momence.com)" }
    ],
    "passes": [
      { slug: "class-packs", note: "Packages. (help.momence.com)" },
      { slug: "expiration-rules", note: "Expiry settings on packs/subscriptions. (help.momence.com)" },
      { slug: "shareable-passes", note: "Parents can book for children on same membership/credits. (help.momence.com)" },
      { slug: "transfer-rules", note: "Move membership to another customer. (help.momence.com)" }
    ],
    "loyalty-and-referral": [
      { slug: "referrals", note: "Customer referral program. (help.momence.com)" }
    ],
    "community": [
      { slug: "community-posts", note: "Announcements & comments with notifications. (help.momence.com)" }
    ],
    "admin-and-permissions": [
      { slug: "role-based-permissions", note: "Admin/Operator/Front Desk etc. (help.momence.com)" }
    ],
    "scheduling-and-availability": [
      { slug: "staff-scheduling", note: "Boards; staff availability. (help.momence.com)" }
    ],
    "compensation": [
      { slug: "payroll-export", note: "Teacher payroll reports. (help.momence.com)" },
      { slug: "tips", note: "Tips in POS & staff checkout. (help.momence.com)" },
      { slug: "performance-dashboards", note: "Insights analytics. (help.momence.com)" }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Customer profiles & history. (help.momence.com)" },
      { slug: "lead-capture-forms", note: "Leads app & web lead forms. (help.momence.com)" },
      { slug: "lead-pipeline-stages", note: "Leads dashboard with stages. (help.momence.com)" }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Campaigns & templates. (help.momence.com)" },
      { slug: "sms-marketing", note: "2-way SMS tiers. (help.momence.com)" },
      { slug: "marketing-automation", note: "Sequences (triggers/conditions/actions). (help.momence.com)" },
      { slug: "promo-codes", note: "Discount codes. (help.momence.com)" },
      { slug: "landing-pages", note: "Hosted purchase pages. (help.momence.com)" }
    ],
    "ads-and-tracking": [
      { slug: "facebook-ads-pixel", note: "Meta pixel supported. (help.momence.com)" },
      { slug: "google-analytics", note: "GA4 via GTM. (help.momence.com)" },
      { slug: "ads-manager", note: "In-platform Ads Manager. (help.momence.com)" }
    ]
  }
}
, {
  id: "arketa",
  name: "Arketa",
  url: "https://arketa.com/",
  additionalInfo: [
    "Reserve with Google integration to capture bookings from Google Search/Maps. (help.sutrapro.com)",
    "Custom-branded iOS/Android apps (Studio Suite) + Apple TV & Roku support. (arketa.com)",
    "Arketa AI: embedded, customizable studio assistant/chatbot (Marketing Suite add-on). (help.sutrapro.com)",
    "Unpaid Reservation Resolver automation to chase/cancel unpaid bookings. (help.sutrapro.com)",
    "Kisi door access integration; tie check-ins to physical access. (help.sutrapro.com)",
    "Spot booking maps for seat/mat/bike selection and resource management. (help.sutrapro.com)",
    "Automated penalties for late cancel/no-show with timed charging. (help.sutrapro.com)",
    "Stripe Terminal (BBPOS WisePOS E) for in-person; 135+ invoicing currencies and local methods via Stripe Invoicing. (help.sutrapro.com)",
    "ClassPass & Wellhub integrations for lead acquisition/distribution. (help.sutrapro.com)"
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Embeddable scheduling/checkout widgets. (arketa.com)" },
      { slug: "embedded-iframe", note: "Embeds supported; tracking notes for embed vs direct link. (arketa.com)" },
      { slug: "branded-microsite", note: "Hosted checkout & branded website option. (help.sutrapro.com)" },
      { slug: "ios-app", note: "Custom-branded iOS app (Studio Suite). (arketa.com)" },
      { slug: "android-app", note: "Custom-branded Android app (Studio Suite). (arketa.com)" },
      { slug: "facebook-instagram-booking", note: "Can’t find information (pixels/ads supported; no native Reserve). (help.sutrapro.com)" },
      { slug: "google-reserve", note: "Reserve with Google integration. (help.sutrapro.com)" },
      { slug: "phone-in-person-entry", note: "Front desk bookings via check-in & POS. (help.sutrapro.com)" },
      { slug: "kiosk-self-service", note: "Self Check-In screen (iPad/computer). (help.sutrapro.com)" },
      { slug: "custom-portal-via-api", note: "Public API listed. (help.sutrapro.com)" }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Standard classes & events. (help.sutrapro.com)" },
      { slug: "course-multi-session-series", note: "Events, retreats, courses. (arketa.com)" },
      { slug: "workshops-events", note: "Workshops/events supported. (arketa.com)" },
      { slug: "private-1-1", note: "Appointments & private scheduling. (help.sutrapro.com)" },
      { slug: "semi-private-small-group", note: "Capacity controls; assigned spot booking. (help.sutrapro.com)" },
      { slug: "virtual-live-video", note: "Livestream + Zoom best practices. (help.sutrapro.com)" },
      { slug: "on-demand-recorded-content", note: "Unlimited on-demand library. (arketa.com)" }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Recurring templates & client recurring booking. (arketa.com)" },
      { slug: "rolling-enrollments", note: "Implied via recurring booking/weekly schedules. (help.sutrapro.com)" },
      { slug: "fixed-date-courses", note: "Courses with set periods. (arketa.com)" },
      { slug: "waitlist-for-courses", note: "Can’t find information (waitlists exist for classes/appointments). (help.sutrapro.com)" }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Per-class capacity prevents overbooking. (help.sutrapro.com)" },
      { slug: "equipment-based-capacity", note: "Spot/room resources (bikes/mats) & availability rules. (help.sutrapro.com)" },
      { slug: "overbooking-allowance", note: "Can’t find information." },
      { slug: "waitlist", note: "Automated waitlist management. (arketa.com)" },
      { slug: "auto-promotion-from-waitlist", note: "Can’t find information." },
      { slug: "booking-window-open-close", note: "Global + per-service open/close policies. (help.sutrapro.com)" },
      { slug: "cut-off-time-before-start", note: "Configurable booking close window. (help.sutrapro.com)" },
      { slug: "late-cancel-rules", note: "Automated late-cancel penalties. (help.sutrapro.com)" },
      { slug: "no-show-fee", note: "Automated no-show penalties. (help.sutrapro.com)" },
      { slug: "grace-periods", note: "Can’t find information." },
      { slug: "buffer-times-between-classes", note: "Buffers supported for privates. (help.sutrapro.com)" }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Multi-location + rooms. (arketa.com)" },
      { slug: "equipment", note: "Resources include equipment/spots. (help.sutrapro.com)" },
      { slug: "instructors", note: "Instructor eligibility & subbing. (help.sutrapro.com)" },
      { slug: "multiple-resources-per-booking", note: "Rooms/resources & instructor availability considered. (help.sutrapro.com)" },
      { slug: "conflict-detection-prevention", note: "Availability rules block conflicts. (help.sutrapro.com)" }
    ],
    "calendar-sync": [
      { slug: "google-calendar-2-way", note: "One-way Arketa → Google (not 2-way). (help.sutrapro.com)" },
      { slug: "outlook-2-way", note: "Can’t find information (use Google as bridge). (help.sutrapro.com)" },
      { slug: "icloud-2-way", note: "Can’t find information. (help.sutrapro.com)" },
      { slug: "ics-feed-1-way", note: "Can’t find information." }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Class check-in screen. (help.sutrapro.com)" },
      { slug: "mobile-app-check-in", note: "Client check-in via custom app. (help.sutrapro.com)" },
      { slug: "kiosk-ipad-check-in", note: "Self Check-In screen. (help.sutrapro.com)" },
      { slug: "qr-code-barcode-scanning", note: "Can’t find information." },
      { slug: "nfc-rfid", note: "Can’t find information." },
      { slug: "turnstile-door-access-integration", note: "Kisi access control integration. (help.sutrapro.com)" }
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "Build custom forms & fields. (help.sutrapro.com)" },
      { slug: "conditional-logic", note: "Can’t find information." },
      { slug: "e-sign-waivers", note: "E-sign liability waivers. (arketa.com)" },
      { slug: "health-screening", note: "Can’t find information." },
      { slug: "parental-consent", note: "Can’t find information." },
      { slug: "photo-video-consent", note: "Can’t find information." },
      { slug: "per-class-forms", note: "Can’t find information." },
      { slug: "custom-fields", note: "Custom fields supported. (help.sutrapro.com)" }
    ],
    "booking-models": [
      { slug: "guest-checkout", note: "Can’t find information (accounts typically required). (help.sutrapro.com)" },
      { slug: "account-required", note: "Required signup fields documented. (help.sutrapro.com)" },
      { slug: "family-group-bookings", note: "“Book for a guest” setting. (help.sutrapro.com)" },
      { slug: "corporate-team-bookings", note: "Invoicing for corporate clients. (help.sutrapro.com)" },
      { slug: "multi-attendee-in-one-booking", note: "Guest booking supports multiple people. (help.sutrapro.com)" },
      { slug: "add-on-upsells-at-checkout", note: "Can’t find definitive spec (Add-ons referenced). (help.sutrapro.com)" }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Transactional/automated emails; customizable templates. (help.sutrapro.com)" },
      { slug: "sms-reminders", note: "Text reminders & SMS in automations. (help.sutrapro.com)" },
      { slug: "push-notifications", note: "Included with branded app. (arketa.com)" },
      { slug: "whatsapp-notifications", note: "Can’t find information (external tools suggested). (help.sutrapro.com)" },
      { slug: "two-way-sms", note: "1:1 texting in Marketing Suite. (arketa.com)" },
      { slug: "custom-templates", note: "Transactional emails with handlebars/custom content. (help.sutrapro.com)" },
      { slug: "automated-waitlist-messages", note: "Can’t find information (waitlist exists). (help.sutrapro.com)" }
    ],
    "payment-gateways": [
      { slug: "stripe", note: "Primary processor; Stripe Terminal supported. (help.sutrapro.com)" }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Via Stripe. (arketa.com)" },
      { slug: "apple-pay", note: "Supported online & via Stripe Terminal for tap. (help.sutrapro.com)" },
      { slug: "google-pay", note: "Supported online & via Stripe Terminal for tap. (help.sutrapro.com)" },
      { slug: "ach-debit", note: "Supported via Stripe Invoicing payment methods. (help.sutrapro.com)" },
      { slug: "sepa-direct-debit", note: "Supported via Stripe Invoicing payment methods. (help.sutrapro.com)" },
      { slug: "ideal", note: "Supported via Stripe Invoicing payment methods. (help.sutrapro.com)" },
      { slug: "bancontact", note: "Supported via Stripe Invoicing payment methods. (help.sutrapro.com)" },
      { slug: "cash", note: "Record cash in POS (‘complete a cash payment’). (help.sutrapro.com)" }
    ],
    "point-of-sale-in-person": [
      { slug: "card-reader", note: "Stripe BBPOS WisePOS E supported. (help.sutrapro.com)" },
      { slug: "tap-to-pay", note: "Can’t find information (Stripe Terminal recommended for tap). (help.sutrapro.com)" }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Drop-ins. (help.sutrapro.com)" },
      { slug: "class-packs-punch-cards", note: "Packages. (arketa.com)" },
      { slug: "memberships-subscriptions", note: "Robust subscription builder. (help.sutrapro.com)" },
      { slug: "intro-offers", note: "Intro Offer flows in automations. (help.sutrapro.com)" },
      { slug: "free-trials", note: "Free-trial adjustments possible via pause. (help.sutrapro.com)" },
      { slug: "sliding-scale", note: "Sliding Scale class pricing. (help.sutrapro.com)" }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Subscriptions with automatic invoices. (help.sutrapro.com)" },
      { slug: "dunning-retry-logic", note: "Auto-retries (4 attempts) for failed invoices. (help.sutrapro.com)" }
    ],
    "taxes-and-invoicing": [
      { slug: "vat-gst-hst", note: "System-wide, location-based & advanced rates. (help.sutrapro.com)" },
      { slug: "multiple-tax-rates", note: "Supported. (help.sutrapro.com)" },
      { slug: "invoices", note: "Create/send invoices; 135+ currencies & many local methods. (help.sutrapro.com)" }
    ],
    "discounts-and-credits": [
      { slug: "coupon-codes", note: "Promo codes supported. (help.sutrapro.com)" },
      { slug: "referral-discounts", note: "Referral program under Membership + Loyalty. (arketa.com)" },
      { slug: "gift-cards", note: "Gift cards & gift card credits. (help.sutrapro.com)" },
      { slug: "store-credit", note: "Account balance/credits. (help.sutrapro.com)" }
    ],
    "risk-and-compliance": [
      { slug: "3-d-secure-sca", note: "Handled via Stripe. (help.sutrapro.com)" },
      { slug: "pci-dss-compliance", note: "Handled via Stripe. (help.sutrapro.com)" },
      { slug: "chargeback-management", note: "‘Client Payment Disputes’ help topic. (help.sutrapro.com)" }
    ],
    "currency": [
      { slug: "multi-currency-pricing", note: "135+ currencies for invoicing; currency settings. (help.sutrapro.com)" }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Can’t find info (Book for a Guest exists). (help.sutrapro.com)" },
      { slug: "corporate-accounts", note: "Corporate invoicing supported. (help.sutrapro.com)" },
      { slug: "tags-segments", note: "Tags & tag actions in automations. (help.sutrapro.com)" }
    ],
    "memberships": [
      { slug: "contract-terms", note: "Min billing cycles & agreement terms. (help.sutrapro.com)" },
      { slug: "freezes-holds", note: "Pause memberships with granular options. (help.sutrapro.com)" },
      { slug: "carryover-rules", note: "Credit rollover options. (help.sutrapro.com)" },
      { slug: "cancellation-policies", note: "Online cancel options & windows. (help.sutrapro.com)" },
      { slug: "usage-limits", note: "Credits per cycle & booking limits. (help.sutrapro.com)" }
    ],
    "passes": [
      { slug: "class-packs", note: "Packages supported. (arketa.com)" },
      { slug: "shareable-passes", note: "Enable pricing options for guests. (help.sutrapro.com)" }
    ],
    "loyalty-and-referral": [
      { slug: "referrals", note: "Referral program & ‘Book a Friend’. (arketa.com)" },
      { slug: "streaks-badges", note: "Milestone automations (10th/25th/50th/100th visit). (help.sutrapro.com)" }
    ],
    "gift-cards": [
      { slug: "digital-gift-cards", note: "Digital gift cards; credits in client profile. (help.sutrapro.com)" }
    ],
    "community": [
      { slug: "forums-groups", note: "Community features (forums/member-only groups). (arketa.com)" }
    ],
    "admin-and-permissions": [
      { slug: "role-based-permissions", note: "Staff management present; payroll reporting. (arketa.com)" }
    ],
    "scheduling-and-availability": [
      { slug: "staff-scheduling", note: "Team availability & service-specific availability. (help.sutrapro.com)" },
      { slug: "availability-rules", note: "Global booking/cancel windows & overrides. (help.sutrapro.com)" },
      { slug: "time-off", note: "Block unavailable time. (help.sutrapro.com)" },
      { slug: "shift-swaps", note: "Instructor sub requests/subbing workflow. (help.sutrapro.com)" }
    ],
    "compensation": [
      { slug: "payroll-export", note: "Payroll report (CSV). (help.sutrapro.com)" },
      { slug: "commission-structures", note: "Payroll supports % of revenue per class. (help.sutrapro.com)" },
      { slug: "tips", note: "Tips report. (help.sutrapro.com)" },
      { slug: "performance-dashboards", note: "Dashboard charts & analytics. (help.sutrapro.com)" }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Client CRM included. (arketa.com)" },
      { slug: "lead-capture-forms", note: "Lead capture & forms (Marketing Suite). (arketa.com)" },
      { slug: "lead-pipeline-stages", note: "Lead generation + pipeline management. (arketa.com)" }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Campaigns + 1:1 texting. (arketa.com)" },
      { slug: "sms-marketing", note: "Campaigns + 1:1 texting. (arketa.com)" },
      { slug: "marketing-automation", note: "Workflows with email/SMS/tasks/tags/time delays. (help.sutrapro.com)" },
      { slug: "abandoned-booking-recovery", note: "Can’t find information (separate Unpaid Reservation Resolver exists). (help.sutrapro.com)" },
      { slug: "promo-codes", note: "Promo codes supported. (help.sutrapro.com)" },
      { slug: "landing-pages", note: "Custom branded website offering. (arketa.com)" }
    ],
    "ads-and-tracking": [
      { slug: "facebook-ads-pixel", note: "Meta Pixel & Conversions API. (help.sutrapro.com)" },
      { slug: "google-ads-conversion", note: "GA/Ads tracked events. (help.sutrapro.com)" }
    ]
  }
},
{
  id: "walla",
  name: "Walla",
  url: "https://www.hellowalla.com/",
  additionalInfo: [
    "Book-a-Spot layouts with equipment/seat selection; handle out-of-order machines and preferred bikes. (hellowalla.com)",
    "Click-to-Cancel compliance tools for FTC rule (online cancel + internal notifications). (hellowalla.com)",
    "Credits-based pricing alongside plans/packs; good for premium/hybrid slots. (hellowalla.com)",
    "Built-in marketing stack: Meta Pixel + Meta Lead Import and GA integrations feeding Walla CRM/Collections. (hellowalla.com)",
    "Two-way texting add-on, push notifications & announcements for behavior-based comms. (hellowalla.com)",
    "Collections (dynamic audiences) to segment members/leads for targeted campaigns. (hellowalla.com)",
    "Gift cards (digital/physical) with embeddable widget; self check-in to reduce front-desk friction. (hellowalla.com)"
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Embeddable widgets to book & buy. (hellowalla.com)" },
      { slug: "ios-app", note: "Walla client app; branded app available. (hellowalla.com)" },
      { slug: "android-app", note: "Walla client app; branded app available. (hellowalla.com)" },
      { slug: "kiosk-self-service", note: "Self check-in on tablet/iPad. (hellowalla.com)" },
      { slug: "phone-in-person-entry", note: "Front desk checkout; staff add guests & take payments. (hellowalla.com)" }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Drop-ins supported. (hellowalla.com)" },
      { slug: "course-multi-session-series", note: "Enrollments/Courses. (hellowalla.com)" },
      { slug: "workshops-events", note: "Workshops/enrollments; ‘add a guest’. (hellowalla.com)" },
      { slug: "private-1-1", note: "Appointments. (hellowalla.com)" },
      { slug: "virtual-live-video", note: "Built-in Zoom integration. (hellowalla.com)" },
      { slug: "on-demand-recorded-content", note: "VOD courses add-on. (hellowalla.com)" }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Automated scheduling includes recurring bookings. (hellowalla.com)" },
      { slug: "fixed-date-courses", note: "Enrollments/courses. (hellowalla.com)" }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Max attendance per class/room. (hellowalla.com)" },
      { slug: "waitlist", note: "Waitlist with position-in-line prompts. (hellowalla.com)" },
      { slug: "automated-waitlist-messages", note: "Automated notifications. (hellowalla.com)" },
      { slug: "late-cancel-rules", note: "Configurable late cancel; refund routing options. (hellowalla.com)" },
      { slug: "no-show-fee", note: "Configurable no-show fee. (hellowalla.com)" },
      { slug: "overbooking-allowance", note: "System warns on overbooked classes. (hellowalla.com)" },
      { slug: "equipment-based-capacity", note: "Book-a-Spot layout; handle out-of-order/preferred bikes. (hellowalla.com)" }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Multi-location; tailor room layouts. (hellowalla.com)" },
      { slug: "equipment", note: "Seat/machine selection & management. (hellowalla.com)" },
      { slug: "instructors", note: "Instructor notifications for appointments. (hellowalla.com)" },
      { slug: "conflict-detection-prevention", note: "Tools to reduce double bookings. (hellowalla.com)" }
    ],
    "calendar-sync": [
      { slug: "ics-feed-1-way", note: "Personal calendar feed (1-way) to Google/iCal. (hellowalla.com)" }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Self/staff check-in. (hellowalla.com)" },
      { slug: "qr-code-barcode-scanning", note: "QR codes for sign-ups/check-ins/account updates. (hellowalla.com)" }
    ],
    "forms-and-waivers": [
      { slug: "e-sign-waivers", note: "E-sign waivers. (hellowalla.com)" },
      { slug: "custom-fields", note: "Lead capture forms with customizable fields. (hellowalla.com)" }
    ],
    "booking-models": [
      { slug: "account-required", note: "Login-based booking. (hellowalla.com)" },
      { slug: "family-group-bookings", note: "Add guests; guest passes. (hellowalla.com)" },
      { slug: "corporate-team-bookings", note: "Split family/corporate accounts. (hellowalla.com)" },
      { slug: "multi-attendee-in-one-booking", note: "Add a guest via widget/front desk. (hellowalla.com)" }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Automated reminders. (hellowalla.com)" },
      { slug: "sms-reminders", note: "Texts & reminders; two-way texting available. (hellowalla.com)" },
      { slug: "push-notifications", note: "Marketing & reminders via app. (hellowalla.com)" },
      { slug: "automated-waitlist-messages", note: "Automated waitlist notifications. (hellowalla.com)" },
      { slug: "custom-templates", note: "Customizable communications. (hellowalla.com)" }
    ],
    "payment-gateways": [
      { slug: "stripe", note: "Native; Stripe Terminal for POS. (hellowalla.com)" }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Card payments. (hellowalla.com)" },
      { slug: "apple-pay", note: "Apple Pay supported. (hellowalla.com)" },
      { slug: "google-pay", note: "Google Pay supported. (hellowalla.com)" },
      { slug: "ach-debit", note: "ACH/EFT supported. (hellowalla.com)" },
      { slug: "cash", note: "Cash accepted. (hellowalla.com)" },
      { slug: "gift-cards", note: "Gift cards usable as tender. (hellowalla.com)" }
    ],
    "point-of-sale-in-person": [
      { slug: "card-reader", note: "Stripe Terminal hardware. (hellowalla.com)" }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Drop-ins. (hellowalla.com)" },
      { slug: "class-packs-punch-cards", note: "Credits. (hellowalla.com)" },
      { slug: "memberships-subscriptions", note: "Memberships. (hellowalla.com)" },
      { slug: "intro-offers", note: "Intro discount tooling & automations. (hellowalla.com)" },
      { slug: "free-trials", note: "Free trials supported. (hellowalla.com)" },
      { slug: "tiered-pricing", note: "Tiered memberships. (hellowalla.com)" }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Autopay memberships. (hellowalla.com)" },
      { slug: "partial-payments", note: "Partial payments supported. (hellowalla.com)" },
      { slug: "installments", note: "Installments supported. (hellowalla.com)" },
      { slug: "deposits", note: "Appointments can require deposit/full payment. (hellowalla.com)" },
      { slug: "failed-payment-recovery", note: "Failed payment reminders/collections nudges. (hellowalla.com)" }
    ],
    "taxes-and-invoicing": [
      { slug: "invoices", note: "Generate & send invoices. (hellowalla.com)" }
    ],
    "discounts-and-credits": [
      { slug: "coupon-codes", note: "Promo code creation & redemption reporting. (hellowalla.com)" },
      { slug: "auto-discounts", note: "Intro discounts auto-apply to qualified clients. (hellowalla.com)" },
      { slug: "gift-cards", note: "Digital & physical; widget to sell gift cards. (hellowalla.com)" },
      { slug: "store-credit", note: "Refund to account balance; wallet view. (hellowalla.com)" }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Family accounts. (hellowalla.com)" },
      { slug: "corporate-accounts", note: "Corporate accounts. (hellowalla.com)" },
      { slug: "tags-segments", note: "Collections (dynamic audiences). (hellowalla.com)" }
    ],
    "memberships": [
      { slug: "freezes-holds", note: "Track freeze/hold status. (hellowalla.com)" },
      { slug: "cancellation-policies", note: "Click-to-Cancel compliance; online cancel. (hellowalla.com)" },
      { slug: "usage-limits", note: "Limited vs unlimited plans. (hellowalla.com)" }
    ],
    "passes": [
      { slug: "class-packs", note: "Credits/packs. (hellowalla.com)" },
      { slug: "expiration-rules", note: "Define expirations/holds/cancellations on packages. (hellowalla.com)" }
    ],
    "loyalty-and-referral": [
      { slug: "referrals", note: "Referral name tracking; strategies supported. (hellowalla.com)" }
    ],
    "gift-cards": [
      { slug: "digital-gift-cards", note: "Digital gift cards. (hellowalla.com)" },
      { slug: "physical-gift-cards", note: "Physical gift cards available. (hellowalla.com)" },
      { slug: "balance-management", note: "Gift card settings/permissions. (hellowalla.com)" }
    ],
    "admin-and-permissions": [
      { slug: "role-based-permissions", note: "Granular role permissions (e.g., gift card settings, course creation). (hellowalla.com)" }
    ],
    "scheduling-and-availability": [
      { slug: "staff-scheduling", note: "Staff scheduling & sub management. (hellowalla.com)" },
      { slug: "availability-rules", note: "Manage staff hours & availability. (hellowalla.com)" }
    ],
    "compensation": [
      { slug: "payroll-export", note: "Pay rate preparation/reporting. (hellowalla.com)" }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Rich client profiles & permissions. (hellowalla.com)" },
      { slug: "lead-capture-forms", note: "Embeddable/customizable lead forms. (hellowalla.com)" }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Branded emails & newsletters. (hellowalla.com)" },
      { slug: "sms-marketing", note: "Two-way texting add-on. (hellowalla.com)" },
      { slug: "marketing-automation", note: "Intro Offer & Win-Back automations; full Marketing Suite. (hellowalla.com)" },
      { slug: "promo-codes", note: "Apply to items or entire purchase. (hellowalla.com)" },
      { slug: "landing-pages", note: "Walla Pro Custom Website. (hellowalla.com)" }
    ],
    "ads-and-tracking": [
      { slug: "facebook-ads-pixel", note: "Meta Pixel + Meta Lead Import. (hellowalla.com)" },
      { slug: "google-analytics", note: "Google Analytics supported. (hellowalla.com)" }
    ]
  }
},
{
  id: "bsport",
  name: "bsport",
  url: "https://www.bsport.io/",
  additionalInfo: [
    "One-Click Booking (guest checkout for first-timers) paired with ‘Welcome Pass’. (Intercom)",
    "Spot Scheduling with custom room maps for bikes/mats; prevents over-capacity beyond mapped spots. (Intercom)",
    "Access Monitoring at reception: scan member QR to validate access status (Valid/Warning/Not Valid). (pro.bsport.io)",
    "Self Check-In Tablet role & teacher time-clock; franchise tooling & marketplace integrations (ClassPass, Wellhub/USC). (pro.bsport.io)",
    "Stripe Terminal hardware; fiskaly TSE for compliant fiscal receipts in Germany. (Intercom)"
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Embeddable calendar/passes/shop/newsletter widgets with custom CSS. (Intercom)" },
      { slug: "embedded-iframe", note: "Provided via widgets. (Intercom)" },
      { slug: "branded-microsite", note: "Hosted member portal/marketplace pages. (pro.bsport.io)" },
      { slug: "ios-app", note: "Official member app; branded app on Premium. (Apple)" },
      { slug: "android-app", note: "Official member app; branded app on Premium. (Apple)" },
      { slug: "facebook-instagram-booking", note: "Link-out guidance (no native Reserve). (Intercom)" },
      { slug: "phone-in-person-entry", note: "Staff can book members in back office. (Intercom)" },
      { slug: "kiosk-self-service", note: "Self Check-In Tablet & kiosk role. (pro.bsport.io)" }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Standard group classes. (pro.bsport.io)" },
      { slug: "course-multi-session-series", note: "Workshops/courses & multi-session booking. (Intercom)" },
      { slug: "workshops-events", note: "Dedicated workshop flows. (Intercom)" },
      { slug: "private-1-1", note: "Appointments. (Intercom)" },
      { slug: "semi-private-small-group", note: "‘Duo’ appointments. (Intercom)" },
      { slug: "virtual-live-video", note: "Zoom integration & livestream guides. (Intercom)" },
      { slug: "on-demand-recorded-content", note: "Video on Demand from Essential plan. (pro.bsport.io)" }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Create recurring sessions & bookings. (Intercom)" },
      { slug: "fixed-date-courses", note: "Workshops/courses with multiple dates. (Intercom)" }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Set class capacity; spot plans enforce max spots. (Intercom)" },
      { slug: "waitlist", note: "Full waitlist management & bulk promotion tools. (Intercom)" },
      { slug: "booking-window-open-close", note: "Customise booking window settings. (Intercom)" },
      { slug: "late-cancel-rules", note: "Configure late-cancel; penalties. (Intercom)" },
      { slug: "no-show-fee", note: "Penalties (block pass/deduct balance). (Intercom)" }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Create rooms/layouts; calendar grouped by room. (Intercom)" },
      { slug: "instructors", note: "Teachers; assign; substitute tool. (Intercom)" }
    ],
    "calendar-sync": [
      { slug: "ics-feed-1-way", note: "ICS link included in confirmations. (Intercom)" }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Teachers validate attendance; staff time clock. (Intercom)" },
      { slug: "mobile-app-check-in", note: "Teachers can check in members via app. (Intercom)" },
      { slug: "kiosk-ipad-check-in", note: "Self Check-In Tablet & role. (pro.bsport.io)" },
      { slug: "qr-code-barcode-scanning", note: "Access Monitoring scans member QR from app. (pro.bsport.io)" }
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "Customisable signup/marketing forms. (Intercom)" },
      { slug: "e-sign-waivers", note: "Liability/terms captured in signup/checkout. (Intercom)" }
    ],
    "booking-models": [
      { slug: "guest-checkout", note: "One-Click Booking for first booking (no account). (Intercom)" },
      { slug: "account-required", note: "Standard login/signup flow beyond first booking. (Intercom)" },
      { slug: "family-group-bookings", note: "Book for family/friends via relationships. (Intercom)" },
      { slug: "corporate-team-bookings", note: "Private organisations/room bookings. (Intercom)" },
      { slug: "multi-attendee-in-one-booking", note: "Select another member in family/friend booking. (Intercom)" }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Transactional emails editable (confirmation/reminders). (Intercom)" },
      { slug: "sms-reminders", note: "SMS available from certain plans. (pro.bsport.io)" },
      { slug: "push-notifications", note: "Push from Essential plan; marketing too. (pro.bsport.io)" }
    ],
    "payment-gateways": [
      { slug: "stripe", note: "Online + Stripe Terminal in-person. (Intercom)" }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Card payments. (Intercom)" },
      { slug: "sepa-direct-debit", note: "SEPA DD (one-time & recurring). (Intercom)" },
      { slug: "ideal", note: "iDEAL (one-time). (Intercom)" },
      { slug: "bancontact", note: "Bancontact (one-time). (Intercom)" }
    ],
    "point-of-sale-in-person": [
      { slug: "card-reader", note: "Stripe Terminal (e.g., WisePOS E). (Intercom)" },
      { slug: "barcode-scanner", note: "Supported for retail/Webshop charging. (Intercom)" }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Single classes. (pro.bsport.io)" },
      { slug: "class-packs-punch-cards", note: "Passes + reporting. (Intercom)" },
      { slug: "memberships-subscriptions", note: "Subscriptions & management. (Intercom)" },
      { slug: "intro-offers", note: "‘Welcome Pass’ & free class options. (Intercom)" }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Subscriptions. (Intercom)" },
      { slug: "dunning-retry-logic", note: "Automatic retries for failed subs. (Intercom)" },
      { slug: "deposits", note: "Deposit handling supported. (Intercom)" }
    ],
    "taxes-and-invoicing": [
      { slug: "vat-gst-hst", note: "EU VAT & Canada provincial tax; pre/post tax display. (Intercom)" },
      { slug: "tax-inclusive-exclusive", note: "Display prices before tax on marketplace. (Intercom)" },
      { slug: "fiscal-receipts", note: "fiskaly TSE integration (DE) with QR on receipts. (Intercom)" },
      { slug: "invoices", note: "Invoicing & refunds supported. (Intercom)" }
    ],
    "discounts-and-credits": [
      { slug: "coupon-codes", note: "Coupons & reporting. (Intercom)" },
      { slug: "referral-discounts", note: "Referral links feature. (Intercom)" },
      { slug: "gift-cards", note: "Gift card widget integration. (Intercom)" }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Relationships for family/friends. (Intercom)" },
      { slug: "corporate-accounts", note: "Private organisations. (Intercom)" },
      { slug: "tags-segments", note: "Tags & smart lists. (pro.bsport.io)" }
    ],
    "memberships": [
      { slug: "contract-terms", note: "Terms accepted on subscription purchase. (Intercom)" },
      { slug: "cancellation-policies", note: "Late-cancel/no-show penalties. (Intercom)" },
      { slug: "usage-limits", note: "Limit future bookings; pass credits. (Intercom)" },
      { slug: "access-control-by-membership", note: "Access Monitoring validates status at entry. (pro.bsport.io)" }
    ],
    "passes": [
      { slug: "class-packs", note: "Passes. (Intercom)" },
      { slug: "expiration-rules", note: "Validity/credits managed & reported. (Intercom)" }
    ],
    "admin-and-permissions": [
      { slug: "role-based-permissions", note: "Pre-configured roles (Check-in roles/Admin/Owner) + granular perms. (Intercom)" }
    ],
    "scheduling-and-availability": [
      { slug: "staff-scheduling", note: "Teacher schedules. (Intercom)" },
      { slug: "shift-swaps", note: "Automated teacher substitution. (pro.bsport.io)" }
    ],
    "compensation": [
      { slug: "commission-structures", note: "Sales commissions for staff. (Intercom)" },
      { slug: "performance-dashboards", note: "Business dashboards. (pro.bsport.io)" }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Member management with tags & smart lists. (pro.bsport.io)" },
      { slug: "lead-capture-forms", note: "Custom/marketing forms. (Intercom)" }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Newsletters & marketing suite. (Intercom)" },
      { slug: "sms-marketing", note: "Available from Essential plan. (pro.bsport.io)" },
      { slug: "promo-codes", note: "Coupons/promos supported. (Intercom)" }
    ],
    "ads-and-tracking": [
      { slug: "facebook-ads-pixel", note: "Meta Pixel via GTM. (Intercom)" },
      { slug: "google-analytics", note: "GA4 event tracking docs. (Intercom)" }
    ]
  }
},
{
  id: "legitfit",
  name: "LegitFit",
  url: "https://www.legitfit.com/",
  additionalInfo: [
    "AI agent ‘Lia’ for PAR-Q auto-drafting, client labels (auto-tagging), and revenue forecasts. (legitfit.com)",
    "Branded mobile app & branded emails/public pages on top tier. (legitfit.com)",
    "Turnstile integration for access control + QR code check-in; roaming memberships for multi-location brands. (legitfit.com)",
    "Integrated POS & card reader (higher plan). (legitfit.com)",
    "Automated non-attendance (no-show) fees (released 2024). (legitfit.com)"
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Website embed supported; public booking pages also iframe-able. (legitfit.com)" },
      { slug: "embedded-iframe", note: "Public pages load with ?isIframe=true. (legitfit.com)" },
      { slug: "branded-microsite", note: "Hosted booking/timetable/product pages. (legitfit.com)" },
      { slug: "ios-app", note: "Official member app (iOS). (Apple)" },
      { slug: "android-app", note: "Official member app (Android). (Apple)" },
      { slug: "phone-in-person-entry", note: "Manual bookings; integrated POS & reader on higher tiers. (support.legitfit.com)" }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "One-off packages/passes. (legitfit.com)" },
      { slug: "workshops-events", note: "Events listed/bookable. (legitfit.com)" },
      { slug: "private-1-1", note: "1–1 appointment scheduler. (legitfit.com)" },
      { slug: "semi-private-small-group", note: "Small Group PT products live. (legitfit.com)" },
      { slug: "virtual-live-video", note: "Virtual sessions supported (video links). (support.legitfit.com)" }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Recur/copy timetables. (support.legitfit.com)" }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Increase/decrease capacity. (support.legitfit.com)" },
      { slug: "waitlist", note: "Waitlist with email/push notifications. (support.legitfit.com)" },
      { slug: "booking-window-open-close", note: "Business-controlled windows (e.g., 7-day). (support.legitfit.com)" },
      { slug: "late-cancel-rules", note: "Cancellation fees. (support.legitfit.com)" },
      { slug: "no-show-fee", note: "No-show fee supported. (legitfit.com)" }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Multi-location; roaming memberships. (legitfit.com)" },
      { slug: "instructors", note: "Assign instructors. (support.legitfit.com)" }
    ],
    "calendar-sync": [],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Manual check-in & reports. (support.legitfit.com)" },
      { slug: "mobile-app-check-in", note: "Member QR code in app. (support.legitfit.com)" },
      { slug: "qr-code-barcode-scanning", note: "QR supported. (support.legitfit.com)" },
      { slug: "turnstile-door-access-integration", note: "Turnstile integration. (legitfit.com)" }
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "PAR-Q creation; AI-drafted PARQ. (legitfit.com)" },
      { slug: "e-sign-waivers", note: "‘Signed Waivers’ on products. (legitfit.com)" },
      { slug: "health-screening", note: "PAR-Q. (legitfit.com)" }
    ],
    "booking-models": [
      { slug: "account-required", note: "Invites/self-sign-up accounts. (support.legitfit.com)" },
      { slug: "family-group-bookings", note: "Parental/child accounts; Additional Bookings. (legitfit.com)" },
      { slug: "multi-attendee-in-one-booking", note: "Additional Bookings. (support.legitfit.com)" }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Automated emails/broadcasts. (support.legitfit.com)" },
      { slug: "sms-reminders", note: "1:1 & broadcast SMS. (legitfit.com)" },
      { slug: "push-notifications", note: "Member app push (waitlist, reminders). (legitfit.com)" },
      { slug: "automated-waitlist-messages", note: "Email/push to waitlist. (support.legitfit.com)" }
    ],
    "payment-gateways": [
      { slug: "stripe", note: "Native payments. (legitfit.com)" }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Card payments. (legitfit.com)" },
      { slug: "apple-pay", note: "Apple Pay supported. (Apple)" },
      { slug: "google-pay", note: "Google Pay supported. (legitfit.com pricing)" },
      { slug: "cash", note: "Cash supported. (legitfit.com pricing)" }
    ],
    "point-of-sale-in-person": [
      { slug: "card-reader", note: "Integrated POS & card reader on higher plan. (legitfit.com)" }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Single sessions. (legitfit.com)" },
      { slug: "class-packs-punch-cards", note: "Class packs. (legitfit.com)" },
      { slug: "memberships-subscriptions", note: "Memberships with auto-renew. (support.legitfit.com)" },
      { slug: "intro-offers", note: "Intro offers supported. (legitfit.com)" },
      { slug: "free-trials", note: "Free trials supported. (legitfit.com)" }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Auto-renew memberships. (support.legitfit.com)" },
      { slug: "dunning-retry-logic", note: "Stripe retries failed payments 4 times. (support.legitfit.com)" }
    ],
    "taxes-and-invoicing": [
      { slug: "invoices", note: "Download receipts/invoices. (support.legitfit.com)" }
    ],
    "discounts-and-credits": [
      { slug: "coupon-codes", note: "Discount codes. (support.legitfit.com)" },
      { slug: "gift-cards", note: "Buy as gift. (support.legitfit.com)" }
    ],
    "risk-and-compliance": [
      { slug: "3-d-secure-sca", note: "Via Stripe. (legitfit.com)" },
      { slug: "pci-dss-compliance", note: "Via Stripe. (legitfit.com)" }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Parental/child accounts. (legitfit.com)" },
      { slug: "tags-segments", note: "AI Labels / client labels. (legitfit.com)" }
    ],
    "memberships": [
      { slug: "contract-terms", note: "Minimum terms configurable. (legitfit.com)" },
      { slug: "freezes-holds", note: "Freeze options shown on plans. (legitfit.com)" },
      { slug: "cancellation-policies", note: "Cancellation/no-show fees supported. (support.legitfit.com)" },
      { slug: "usage-limits", note: "Limits (e.g., X classes per week/month). (legitfit.com)" },
      { slug: "access-control-by-membership", note: "Roaming memberships & turnstiles. (legitfit.com)" }
    ],
    "passes": [
      { slug: "class-packs", note: "Passes supported. (legitfit.com)" },
      { slug: "expiration-rules", note: "Expiry on products/passes. (legitfit.com)" }
    ],
    "community": [
      { slug: "forums-groups", note: "Community feed. (legitfit.com)" },
      { slug: "leaderboards", note: "Leaderboards (exercise programming). (legitfit.com)" }
    ],
    "admin-and-permissions": [
      { slug: "role-based-permissions", note: "Restrict staff access; multi-staff setup. (support.legitfit.com)" }
    ],
    "scheduling-and-availability": [],
    "compensation": [
      { slug: "performance-dashboards", note: "Staff performance tracking. (legitfit.com)" }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Member & Client Management; messaging; analytics. (legitfit.com)" }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Broadcast email. (support.legitfit.com)" },
      { slug: "sms-marketing", note: "SMS broadcasts & 1:1. (support.legitfit.com)" },
      { slug: "marketing-automation", note: "Workflows & automated triggers/messages. (legitfit.com)" },
      { slug: "promo-codes", note: "Discount codes. (legitfit.com)" },
      { slug: "landing-pages", note: "Branded public pages for booking. (legitfit.com)" }
    ]
  }
},
{
  id: "gymcatch",
  name: "Gymcatch",
  url: "https://www.gymcatch.com/",
  additionalInfo: [
    "GoCardless support added (Terms updated Mar 30, 2025) alongside Stripe. (Gymcatch)",
    "Self check-in window: customers can self-check-in from 5 minutes before to 5 minutes after start. (support.gymcatch.com)",
    "Pay-what-you-want variable pricing with min/max & suggested price. (support.gymcatch.com)",
    "Web embed uses a domain-bound API key (bolt-on) to protect against misuse. (support.gymcatch.com)",
    "Automated waitlist: notify all, hold places 30 minutes, first-come-first-served. (support.gymcatch.com)"
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Official Web embed (bolt-on with domain-bound API key). (support.gymcatch.com)" },
      { slug: "branded-microsite", note: "Unique Gymcatch booking page (app.gymcatch.com). (support.gymcatch.com)" },
      { slug: "ios-app", note: "Customer iOS app. (Gymcatch)" },
      { slug: "android-app", note: "Customer Android app. (Gymcatch)" },
      { slug: "facebook-instagram-booking", note: "Link-out (bio/CTA), not native Reserve. (support.gymcatch.com)" },
      { slug: "phone-in-person-entry", note: "Admins can add customers/book for them. (support.gymcatch.com)" }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Supported. (support.gymcatch.com)" },
      { slug: "course-multi-session-series", note: "Courses/blocks (bolt-on). (Gymcatch)" },
      { slug: "workshops-events", note: "Workshop session type. (support.gymcatch.com)" },
      { slug: "private-1-1", note: "Appointments. (support.gymcatch.com)" },
      { slug: "virtual-live-video", note: "Livestream + Zoom integration. (support.gymcatch.com)" },
      { slug: "on-demand-recorded-content", note: "On-demand library (purchase via web). (support.gymcatch.com)" }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Recurring supported. (support.gymcatch.com)" },
      { slug: "fixed-date-courses", note: "Blocks. (Gymcatch)" }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Capacity control. (support.gymcatch.com)" },
      { slug: "waitlist", note: "Automated waitlist; notify & hold places 30 mins. (support.gymcatch.com)" },
      { slug: "booking-window-open-close", note: "Open/close relative to start time. (support.gymcatch.com)" },
      { slug: "cut-off-time-before-start", note: "Via booking close controls. (support.gymcatch.com)" },
      { slug: "late-cancel-rules", note: "Per-session policies; auto credit-backs (bolt-on). (support.gymcatch.com)" }
    ],
    "resource-allocation": [
      { slug: "instructors", note: "Unlimited team; host instructor permissions. (Gymcatch)" }
    ],
    "calendar-sync": [
      { slug: "ics-feed-1-way", note: "Add to personal calendars from app (one-way). (support.gymcatch.com)" }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Admins mark attendance. (support.gymcatch.com)" },
      { slug: "mobile-app-check-in", note: "Self check-in from −5 to +5 minutes. (support.gymcatch.com)" }
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "Participation info bolt-on; required fields. (support.gymcatch.com)" },
      { slug: "health-screening", note: "Upload/link questionnaires (e.g., PAR-Q). (support.gymcatch.com)" },
      { slug: "per-class-forms", note: "Present linked PDF/form at booking until received. (support.gymcatch.com)" },
      { slug: "custom-fields", note: "Choose which info to collect/mandate. (support.gymcatch.com)" }
    ],
    "booking-models": [
      { slug: "account-required", note: "Customer accounts for self-service bookings. (support.gymcatch.com)" },
      { slug: "family-group-bookings", note: "Sub-profiles for children/friends; multi-place booking. (support.gymcatch.com)" },
      { slug: "multi-attendee-in-one-booking", note: "Set max places per transaction. (support.gymcatch.com)" }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Automated emails; customisable reminders. (Gymcatch)" },
      { slug: "push-notifications", note: "Customer & admin app push. (Gymcatch)" },
      { slug: "automated-waitlist-messages", note: "Notify when a spot opens. (support.gymcatch.com)" }
    ],
    "payment-gateways": [
      { slug: "stripe", note: "Primary card processor. (support.gymcatch.com)" },
      { slug: "gocardless", note: "Direct debit provider. (support.gymcatch.com)" }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Via Stripe. (support.gymcatch.com)" },
      { slug: "sepa-direct-debit", note: "Via GoCardless (scheme coverage implied). (support.gymcatch.com)" },
      { slug: "cash", note: "‘Pay on the door’ offline option. (support.gymcatch.com)" }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Single sessions. (support.gymcatch.com)" },
      { slug: "class-packs-punch-cards", note: "Bundles/Passes. (support.gymcatch.com)" },
      { slug: "memberships-subscriptions", note: "Recurring over a term. (support.gymcatch.com)" },
      { slug: "intro-offers", note: "‘First class free’ via code or free 1-class bundle. (support.gymcatch.com)" },
      { slug: "free-trials", note: "Promoted in marketing. (Gymcatch)" },
      { slug: "tiered-pricing", note: "Via targeted discount codes. (support.gymcatch.com)" },
      { slug: "pay-what-you-want", note: "Variable price with min/max & suggested. (support.gymcatch.com)" }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Memberships charge at intervals. (support.gymcatch.com)" },
      { slug: "installments", note: "Memberships split total over intervals. (support.gymcatch.com)" }
    ],
    "discounts-and-credits": [
      { slug: "coupon-codes", note: "Discount codes; can target memberships. (support.gymcatch.com)" },
      { slug: "store-credit", note: "Auto-refund as class credits (bolt-on). (support.gymcatch.com)" }
    ],
    "risk-and-compliance": [
      { slug: "3-d-secure-sca", note: "SCA via Stripe. (support.gymcatch.com)" }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Sub-profiles for children/friends. (support.gymcatch.com)" }
    ],
    "memberships": [
      { slug: "contract-terms", note: "Defined term with billing intervals. (support.gymcatch.com)" },
      { slug: "usage-limits", note: "Caps per term/billing interval. (support.gymcatch.com)" },
      { slug: "access-control-by-membership", note: "Use package tags to gate booking validity. (support.gymcatch.com)" }
    ],
    "passes": [
      { slug: "class-packs", note: "Bundles/passes. (support.gymcatch.com)" },
      { slug: "expiration-rules", note: "Time-limited passes/bundles. (support.gymcatch.com)" }
    ],
    "community": [
      { slug: "forums-groups", note: "Business newsfeed + in-app messaging. (Gymcatch)" }
    ],
    "admin-and-permissions": [
      { slug: "role-based-permissions", note: "Granular team permissions. (support.gymcatch.com)" }
    ]
  }
}, {
  id: "fitli",
  name: "Fitli",
  url: "https://fitli.com/",
  additionalInfo: [
    "Zoom integration auto-creates/cancels unique links and injects them into confirmations/reminders.",
    "Kiosk mode: separate URL for self check-in + same-day self-booking (no login).",
    "Google Calendar push: one-way sync for both businesses and clients.",
    "Integrated payments via Usio/REPAY (cards, ACH, optional POS terminals incl. Apple Pay contactless).",
    "Custom onboarding fields and built-in e-sign waivers.",
    "Help center notes features aren’t gated by subscription level.",
    "Payment requests: send email payment links for bookings, packages, retail, or misc. charges."
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Copy-paste embed to place live calendar on Wix/Squarespace/WordPress, etc." },
      { slug: "embedded-iframe", note: "Embed code provided for schedule/calendar." },
      { slug: "branded-microsite", note: "Fitli-hosted public schedule page per business." },
      { slug: "ios-app", note: "Public client iOS app for search/booking/pay." },
      { slug: "android-app", note: "Not available yet; use mobile web." },
      { slug: "facebook-instagram-booking", note: "Facebook “Book Now” button linking to Fitli schedule (no IG Reserve)." },
      { slug: "phone-in-person-entry", note: "Staff can book clients from the business calendar." },
      { slug: "kiosk-self-service", note: "Dedicated kiosk link for self check-in and same-day self-booking (no login)." },
      { slug: "google-reserve", note: "Can’t find information." },
      { slug: "custom-portal-via-api", note: "Can’t find information." }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Drop-in purchase option when enabled." },
      { slug: "workshops-events", note: "Workshops/events supported with setup workflow." },
      { slug: "private-1-1", note: "Appointments (one-on-one) supported." },
      { slug: "semi-private-small-group", note: "Achievable via class capacity limits." },
      { slug: "virtual-live-video", note: "Native Zoom integration; any video link can be used as location." }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Recurring series supported with edit/update of series." },
      { slug: "rolling-enrollments", note: "Can’t find information." },
      { slug: "fixed-date-courses", note: "Can’t find information." },
      { slug: "waitlist-for-courses", note: "Can’t find information (waitlist is documented for classes)." }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Classes become full; triggers waitlist." },
      { slug: "waitlist", note: "Clients/business can join; first-come notifications when spots open." },
      { slug: "auto-promotion-from-waitlist", note: "Can’t find information (notifications sent; not auto-move)." },
      { slug: "booking-window-open-close", note: "Can’t find information." },
      { slug: "cut-off-time-before-start", note: "Can’t find information." },
      { slug: "late-cancel-rules", note: "Late-cancel window + fee handling options." },
      { slug: "no-show-fee", note: "Can’t find information (no-show tracking exists; manual misc charges possible)." },
      { slug: "equipment-based-capacity", note: "Can’t find information." },
      { slug: "overbooking-allowance", note: "Can’t find information." },
      { slug: "grace-periods", note: "Can’t find information." },
      { slug: "buffer-times-between-classes", note: "Can’t find information." }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Facilities/locations setup for scheduling." },
      { slug: "instructors", note: "Professionals/trainers are core resources." },
      { slug: "multiple-resources-per-booking", note: "Can’t find information." },
      { slug: "equipment", note: "Can’t find information." },
      { slug: "conflict-detection-prevention", note: "Can’t find information." }
    ],
    "calendar-sync": [
      { slug: "google-calendar-2-way", note: "One-way push from Fitli to Google Calendar (clients & businesses)." },
      { slug: "outlook-2-way", note: "Can’t find information." },
      { slug: "icloud-2-way", note: "Can’t find information." },
      { slug: "ics-feed-1-way", note: "Can’t find information." }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Check-in & no-show marking with attendance reports." },
      { slug: "mobile-app-check-in", note: "Business UI is mobile-friendly; check in from phone." },
      { slug: "kiosk-ipad-check-in", note: "Kiosk link supports check-in & booking on tablet/computer/phone." },
      { slug: "qr-code-barcode-scanning", note: "Can’t find information." },
      { slug: "turnstile-door-access-integration", note: "Can’t find information." }
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "Add custom fields to signup and require them." },
      { slug: "e-sign-waivers", note: "Built-in waiver system (configurable during onboarding)." },
      { slug: "custom-fields", note: "Custom fields supported for signup/onboarding." }
    ],
    "booking-models": [
      { slug: "guest-checkout", note: "Can’t find information (standard flow requires account activation)." },
      { slug: "account-required", note: "Client account creation/activation required." },
      { slug: "family-group-bookings", note: "“Relationships” lets one payer book multiple people & share packages." },
      { slug: "multi-attendee-in-one-booking", note: "Supported via Relationships." }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Automated at booking + 24h before (configurable)." },
      { slug: "sms-reminders", note: "Supported for clients and professionals (frequency configurable)." },
      { slug: "push-notifications", note: "Can’t find information." },
      { slug: "two-way-sms", note: "Can’t find information." },
      { slug: "custom-templates", note: "Notification settings & customization documented." },
      { slug: "automated-waitlist-messages", note: "Waitlisted clients auto-notified when spots open." }
    ],
    "payment-gateways": [
      { slug: "stripe", note: "Can’t find information (Fitli uses integrated Usio/REPAY, not Stripe directly)." },
      { slug: "integrated-processor", note: "Usio/REPAY via Fitli Payments (cards, ACH, POS)." }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Supported via Fitli Payments." },
      { slug: "apple-pay", note: "Supported in person via POS terminal (contactless)." },
      { slug: "google-pay", note: "Can’t find information." },
      { slug: "ach-debit", note: "ACH bank payments available after enrollment." },
      { slug: "cash", note: "Manual payment type in POS flow." },
      { slug: "cheque", note: "Manual payment type supported." }
    ],
    "point-of-sale-in-person": [
      { slug: "card-reader", note: "POS terminal (swipe/insert/tap) ordered via Fitli; 2.9% + $0.30." },
      { slug: "tap-to-pay", note: "Can’t find information (no-hardware Tap to Pay not documented)." },
      { slug: "receipt-printer", note: "Can’t find information (email receipts are sent)." }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Drop-ins supported." },
      { slug: "class-packs-punch-cards", note: "Packages (e.g., 10-packs)." },
      { slug: "memberships-subscriptions", note: "Auto-renewing memberships." }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Auto-renewing memberships supported." },
      { slug: "dunning-retry-logic", note: "Can’t find information (guidance exists for failed auto-renews)." }
    ],
    "taxes-and-invoicing": [
      { slug: "automatic-tax-calculation", note: "Automatically applies your configured sales tax to eligible items; reporting provided." },
      { slug: "invoices", note: "Email receipts sent; articles mention statements/invoices (details vary)." }
    ],
    "discounts-and-credits": [
      { slug: "coupon-codes", note: "Promotions/promo codes supported (also used in gift-certificate flow)." },
      { slug: "gift-cards", note: "Digital gift certificates supported." }
    ],
    "risk-and-compliance": [
      { slug: "pci-dss-compliance", note: "Can’t find information (processing is tokenized via Usio; no explicit PCI statement found in reviewed pages)." }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Relationships for families; share packages & book multiple attendees." },
      { slug: "emergency-contacts", note: "Emergency contact info supported." },
      { slug: "medical-notes", note: "Session/client notes can store medical items." }
    ],
    "memberships": [
      { slug: "freezes-holds", note: "“Booking Hibernation” for unlimited auto-renew memberships." },
      { slug: "cancellation-policies", note: "Business-set policies with late-cancel options." },
      { slug: "usage-limits", note: "Limits for packages/memberships available." }
    ],
    "passes": [
      { slug: "class-packs", note: "Packages supported." },
      { slug: "expiration-rules", note: "Fixed expiration dates can be set." },
      { slug: "shareable-passes", note: "Shareable via Relationships." }
    ],
    "admin-and-permissions": [
      { slug: "role-based-permissions", note: "Add employees/users and set access levels." }
    ],
    "scheduling-and-availability": [
      { slug: "staff-scheduling", note: "Core calendar supports classes & appointments by professional." },
      { slug: "availability-rules", note: "Appointment availability & blocked time configuration." },
      { slug: "time-off", note: "Blocked time events; recurring/all-day supported." }
    ],
    "compensation": [
      { slug: "payroll-export", note: "Payroll reporting articles exist." },
      { slug: "commission-structures", note: "Pay rates/sliding-scale payroll setup available." },
      { slug: "tips", note: "Tips supported via purchase/misc charge." }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Customer list, profiles, notes, attendance, purchase history." },
      { slug: "lead-capture-forms", note: "“Business Leads for New Client Accounts” + signup flows with custom fields." }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Broadcast/messaging to clients (incl. all customers)." },
      { slug: "promo-codes", note: "Promo codes supported." }
    ]
  }
},
{
  id: "punchpass",
  name: "Punchpass",
  url: "https://www.punchpass.com/",
  additionalInfo: [
    "PWA (no native apps) with mobile attendance & admin tools.",
    "“Open Form Booking” = true guest checkout for selected classes/tickets.",
    "“Scan & Pay” QR invoices: fast in-person Stripe Checkout on the customer’s phone.",
    "On-demand Content Library gated by passes/memberships; recordings can be attached to classes.",
    "Series flexibility: fixed-date courses with series-wide tickets or linked pass; individual reservations within a series.",
    "ACH bank debits (US) supported via Stripe; notes that ACH has no chargebacks.",
    "Simple analytics hooks: GA4 + Meta Pixel; conversions via destination URL goals."
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Embedded timetable via iFrame with multiple filtered views." },
      { slug: "embedded-iframe", note: "Yes (same as Website widget)." },
      { slug: "branded-microsite", note: "Hosted public Punchpass pages with custom URL/branding." },
      { slug: "ios-app", note: "No native app; mobile PWA instead." },
      { slug: "android-app", note: "No native app; mobile PWA instead." },
      { slug: "facebook-instagram-booking", note: "Link/buttons to public pages (not native Reserve)." },
      { slug: "google-reserve", note: "Not supported; suggest using GBP appointment link." },
      { slug: "phone-in-person-entry", note: "Admins can create reservations and collect payment in person." }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Standard classes & tickets." },
      { slug: "course-multi-session-series", note: "Series supported." },
      { slug: "workshops-events", note: "One-time/ticketed events." },
      { slug: "private-1-1", note: "Private Sessions (1:1 or 2+ for semi-private)." },
      { slug: "semi-private-small-group", note: "Private sessions for two or more." },
      { slug: "virtual-live-video", note: "Zoom integration and other links." },
      { slug: "on-demand-recorded-content", note: "Content Library gated by passes/memberships." }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Recurring supported." },
      { slug: "rolling-enrollments", note: "Partial — can book individual sessions within a Series." },
      { slug: "fixed-date-courses", note: "Series with tickets/linked pass." },
      { slug: "waitlist-for-courses", note: "Series-level waitlist (not for individual sessions)." }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Per class/series with overrides." },
      { slug: "waitlist", note: "Email notifications when spots open; caveats documented." },
      { slug: "auto-promotion-from-waitlist", note: "Not indicated; notifications rather than auto-promote." },
      { slug: "booking-window-open-close", note: "Control how far in advance to allow/show reservations." },
      { slug: "cut-off-time-before-start", note: "Booking cutoff supported." },
      { slug: "late-cancel-rules", note: "Late-cancel flags & optional debit policies." },
      { slug: "no-show-fee", note: "Policies/penalties + reporting allow deduction/charge." }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Multi-location support & filters." },
      { slug: "instructors", note: "Instructor profiles + substitute tools." }
    ],
    "calendar-sync": [],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Attendance can be marked by admins/instructors (incl. on mobile)." },
      { slug: "mobile-app-check-in", note: "Via PWA (no native app)." },
      { slug: "qr-code-barcode-scanning", note: "QR used for payments (“Scan & Pay”), not check-in." }
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "Custom forms/fields (Redwood plan)." },
      { slug: "e-sign-waivers", note: "Online waiver capture + PDF." },
      { slug: "health-screening", note: "Health Status field + custom fields." },
      { slug: "custom-fields", note: "Up to 20 custom fields." }
    ],
    "booking-models": [
      { slug: "guest-checkout", note: "“Open Form Booking” for specific classes/tickets (no login)." },
      { slug: "account-required", note: "Default requires login/account." },
      { slug: "family-group-bookings", note: "Family Accounts (children under one customer)." }
    ],
    "notifications": [
      { slug: "email-reminders", note: "System notifications & configurable reminders." },
      { slug: "push-notifications", note: "No native apps; PWA used." },
      { slug: "custom-templates", note: "Custom email templates & variables for automations." },
      { slug: "automated-waitlist-messages", note: "Emails when spots open per waitlist config." }
    ],
    "payment-gateways": [
      { slug: "stripe", note: "Primary online payments." },
      { slug: "square", note: "By request; sell passes via Square channels." }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Via Stripe." },
      { slug: "apple-pay", note: "Via Stripe wallet." },
      { slug: "google-pay", note: "Via Stripe wallet." },
      { slug: "ach-debit", note: "ACH Direct Debit (US)." },
      { slug: "ideal", note: "Enable in Stripe." },
      { slug: "bancontact", note: "Enable in Stripe." },
      { slug: "cash", note: "Mark payments as cash/other." },
      { slug: "cheque", note: "Mark as “cash, check, etc.”" }
    ],
    "point-of-sale-in-person": [
      { slug: "card-reader", note: "Square readers/POS for in-person." },
      { slug: "receipt-printer", note: "Can’t find information (email receipts available)." }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Tickets/drop-ins." },
      { slug: "class-packs-punch-cards", note: "Passes supported." },
      { slug: "memberships-subscriptions", note: "Recurring memberships." },
      { slug: "intro-offers", note: "Free intro pass / free trial options." },
      { slug: "free-trials", note: "Membership free trial supported." },
      { slug: "pay-what-you-want", note: "Donation/sliding-scale for Series & passes." },
      { slug: "sliding-scale", note: "Set a price range for donations/sliding scale." }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Memberships with stored cards; update flows." },
      { slug: "dunning-retry-logic", note: "Payment-failed emails; full dunning not documented." },
      { slug: "partial-payments", note: "Not supported in Paylinks (no partial invoices)." }
    ],
    "taxes-and-invoicing": [
      { slug: "vat-gst-hst", note: "Define one tax rate; label may be renamed." },
      { slug: "multiple-tax-rates", note: "Not supported (one tax only)." },
      { slug: "tax-inclusive-exclusive", note: "Choose tax inclusive or added at checkout." },
      { slug: "automatic-tax-calculation", note: "Not supported (no Stripe Tax line item)." },
      { slug: "invoices", note: "Paylinks invoices & QR “Scan & Pay” available." }
    ],
    "discounts-and-credits": [
      { slug: "coupon-codes", note: "Discount codes." },
      { slug: "referral-discounts", note: "Referral program." },
      { slug: "gift-cards", note: "Digital gift cards; sale/redemption/management." },
      { slug: "store-credit", note: "Can’t find information." }
    ],
    "risk-and-compliance": [
      { slug: "3-d-secure-sca", note: "Handled by Stripe (not explicitly documented by Punchpass)." }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Book/pay for children under one account." },
      { slug: "emergency-contacts", note: "Default field." },
      { slug: "medical-notes", note: "Health Status field/custom fields." },
      { slug: "tags-segments", note: "Customer tags (Redwood plan)." }
    ],
    "memberships": [
      { slug: "freezes-holds", note: "Pause/restart memberships." },
      { slug: "access-control-by-membership", note: "Eligible passes/memberships can be restricted to classes/content." }
    ],
    "passes": [
      { slug: "class-packs", note: "Passes/bundles." },
      { slug: "expiration-rules", note: "Set and bulk-adjust pass expirations." },
      { slug: "shareable-passes", note: "Explicit guidance on sharing." },
      { slug: "transfer-rules", note: "Transfers between customers supported." }
    ],
    "admin-and-permissions": [
      { slug: "role-based-permissions", note: "Admin/restricted/attendance-only instructors." }
    ],
    "compensation": [
      { slug: "payroll-export", note: "Instructor Activities report for payroll/export." }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Profiles, notes, tags, health info, birthdays, docs." },
      { slug: "lead-capture-forms", note: "Custom forms via shareable links or onboarding." }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Bulk email & newsletters." },
      { slug: "marketing-automation", note: "Templated automated emails." },
      { slug: "promo-codes", note: "Discount codes." },
      { slug: "landing-pages", note: "Series Landing Page." }
    ],
    "ads-and-tracking": [
      { slug: "facebook-ads-pixel", note: "Meta Pixel supported." },
      { slug: "google-ads-conversion", note: "Supported via GA goals/destination pages; GA4 tag supported." }
    ]
  }
},
{
  id: "bookamat",
  name: "Bookamat",
  url: "https://www.bookamat.co/",
  additionalInfo: [
    "Installable web app (PWA) for clients & staff instead of native store apps.",
    "Contactless self-check-in with on-screen QR; lets walk-ins register & pay on their phone.",
    "“Activate before payment” flow: permit use before settlement (outstanding balance tracked).",
    "Family/Dependents (“Relationships”) with consolidated invoicing/notifications.",
    "Commission & Payroll reporting built-in.",
    "Optional public directory listing to aid discovery & SEO."
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Embeddable Live Schedule widget (book/buy/register)." },
      { slug: "embedded-iframe", note: "Yes (widget is embeddable)." },
      { slug: "branded-microsite", note: "Hosted Live Schedule page on bookamat.co." },
      { slug: "ios-app", note: "PWA (Add to Home Screen)." },
      { slug: "android-app", note: "PWA (Install on Android)." },
      { slug: "facebook-instagram-booking", note: "Link from FB/IG to Live Schedule (workaround guidance)." },
      { slug: "phone-in-person-entry", note: "Staff can add participants & record in-person payments." },
      { slug: "kiosk-self-service", note: "Client self-check-in page per activity (tablet/iPad), with QR." }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Casual Reservation." },
      { slug: "course-multi-session-series", note: "Recurring series; series views." },
      { slug: "workshops-events", note: "Events/Retreats/Workshops." },
      { slug: "private-1-1", note: "Appointments/private lessons." },
      { slug: "semi-private-small-group", note: "Group classes with capacity control." },
      { slug: "virtual-live-video", note: "Broadcasting links & reminders." }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Weekly/bi-weekly series." },
      { slug: "fixed-date-courses", note: "Once-off or series with start/end." },
      { slug: "waitlist-for-courses", note: "Automated waitlists & notifications." }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Spaces per activity." },
      { slug: "waitlist", note: "With auto notifications." },
      { slug: "auto-promotion-from-waitlist", note: "Semi-auto: email offer requires client confirmation." },
      { slug: "late-cancel-rules", note: "Booking Conditions incl. late-cancel; unlimited packs can lose a day." }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Physical/virtual locations; hybrid classes." },
      { slug: "instructors", note: "Staff/instructor assignment." },
      { slug: "conflict-detection-prevention", note: "Prevents double-booking staff & overlapping location use (toggleable)." }
    ],
    "calendar-sync": [
      { slug: "google-calendar-2-way", note: "One-way push to Google Calendar." },
      { slug: "outlook-2-way", note: "1-way via iCal export/import." },
      { slug: "icloud-2-way", note: "1-way via iCal export/import." },
      { slug: "ics-feed-1-way", note: "iCal file export supported." }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Attendance management." },
      { slug: "mobile-app-check-in", note: "PWA + self-check-in QR." },
      { slug: "kiosk-ipad-check-in", note: "Check-in page on tablet." },
      { slug: "qr-code-barcode-scanning", note: "QR on check-in screen to self-book/check-in." }
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "Pre-Attendance Docs link your Google Form/PDF; prompt new registrants." },
      { slug: "e-sign-waivers", note: "Digital waivers with version history & enforcement." },
      { slug: "health-screening", note: "Via Pre-Attendance Docs." }
    ],
    "booking-models": [
      { slug: "guest-checkout", note: "Likely not (registration required to book/manage)." },
      { slug: "account-required", note: "Yes." },
      { slug: "family-group-bookings", note: "Relationships; payer books & pays for up to 5 dependents." }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Automated client & staff emails; reminders can include broadcast links." },
      { slug: "push-notifications", note: "PWA/app notifications." },
      { slug: "custom-templates", note: "Notification settings & Message Center for bulk emails." },
      { slug: "automated-waitlist-messages", note: "Yes." }
    ],
    "payment-gateways": [
      { slug: "stripe", note: "Integrated online payments." },
      { slug: "square", note: "Integrated." },
      { slug: "paystack", note: "Integrated (regions supported)." },
      { slug: "paypal", note: "Non-integrated payment link (manual reconciliation)." }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Online via Stripe/Square/Paystack." },
      { slug: "apple-pay", note: "Supported when enabled via gateway; Bookamat notes Apple Pay with Paystack too." },
      { slug: "google-pay", note: "Supported when enabled via gateway." },
      { slug: "bank-transfer-eft", note: "Manual payment type with bank details; can be shown online." },
      { slug: "cash", note: "Manual payment type." },
      { slug: "payid-au", note: "Country-specific manual option." },
      { slug: "snapscan-za", note: "Country-specific manual option." }
    ],
    "point-of-sale-in-person": [
      { slug: "card-reader", note: "In-person card terminals supported as manual payment type (no native hardware integration)." }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Casual Reservation." },
      { slug: "class-packs-punch-cards", note: "Credit Packs (1–unlimited credits)." },
      { slug: "memberships-subscriptions", note: "Repeat Reservation (fortnightly/monthly) + Recurring Credit Packs & Auto Debit." },
      { slug: "intro-offers", note: "Can be created via pricing categories." },
      { slug: "tiered-pricing", note: "Multi Weekly rates (e.g., 2–5 classes/week)." }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Repeat reservations & recurring packs." },
      { slug: "proration", note: "Pro-rata billing for repeat reservations (calendar month + flat rate)." },
      { slug: "dunning-retry-logic", note: "Auto-debit retries after 24h on failure + emails." },
      { slug: "post-paid-activation", note: "Activate bookings to allow use before payment (balance owed)." }
    ],
    "taxes-and-invoicing": [
      { slug: "invoices", note: "Instant invoices and monthly client statements (PDF)." },
      { slug: "vat-gst-hst", note: "Sales Tax settings & display of VAT/GST numbers (automatic calc not specified)." }
    ],
    "discounts-and-credits": [
      { slug: "coupon-codes", note: "Discount Coupons." }
    ],
    "risk-and-compliance": [
      { slug: "3-d-secure-sca", note: "Handled by integrated gateways (Stripe/Square/Paystack)." },
      { slug: "pci-dss-compliance", note: "Through gateways; Bookamat PCI scope not stated." }
    ],
    "currency": [
      { slug: "multi-currency-pricing", note: "Per-account single currency (no multi-currency at checkout)." }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Relationships." },
      { slug: "tags-segments", note: "Client Tags." }
    ],
    "memberships": [
      { slug: "cancellation-policies", note: "Per-activity policies." },
      { slug: "usage-limits", note: "Packs define credits & validity (can gate access)." }
    ],
    "passes": [
      { slug: "class-packs", note: "Credit packs with validity." }
    ],
    "loyalty-and-referral": [
      { slug: "leaderboard", note: "Admin attendance leaderboard (not client gamification)." }
    ],
    "admin-and-permissions": [
      { slug: "role-based-permissions", note: "Instructor logins with scoped capabilities; owner/staff roles." }
    ],
    "compensation": [
      { slug: "payroll-export", note: "Payroll Report." },
      { slug: "commission-structures", note: "Set staff commission rates; Commission Report." }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Client profiles, notes, tags, import/export." },
      { slug: "lead-capture-forms", note: "Registration + external Pre-Attendance Docs (e.g., Google Forms)." }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Message Center for bulk emails; Mailchimp integration." },
      { slug: "promo-codes", note: "Discount Coupons." },
      { slug: "landing-pages", note: "Live Schedule + optional public directory listing for SEO." }
    ]
  }
},

{
  id: "momoyoga",
  name: "Momoyoga",
  url: "https://www.momoyoga.com/",
  additionalInfo: [
    "Video on Demand built-in (sell access to recorded classes; playlists).",
    "Automatic waitlist moves with a configurable cut-off window.",
    "Guest booking (“bring a friend”) deducts extra credits automatically.",
    "Wide international payments via Stripe/PayPal/Mollie (Apple Pay, Google Pay, iDEAL, Klarna, SEPA, etc.).",
    "Branded mobile app for yogis available on the Custom plan.",
    "Donation / Pay-what-you-want classes supported.",
    "WordPress plugin to display a live schedule (click-through to Momoyoga).",
    "GDPR-aware workflows and privacy statement."
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "JS widget + WordPress plugin; click-through to Momoyoga checkout." },
      { slug: "branded-microsite", note: "Public Momoyoga schedule/booking site per studio." },
      { slug: "ios-app", note: "Yogi app for booking/canceling/paying." },
      { slug: "android-app", note: "Yogi app (Android)." },
      { slug: "phone-in-person-entry", note: "Admins/teachers can add a yogi or sign up a first-timer from class page." },
      { slug: "embedded-iframe", note: "Not supported (no HTML iframe embedding)." }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Single class products." },
      { slug: "course-multi-session-series", note: "Series/class blocks; add yogis to ‘this class and all following’." },
      { slug: "workshops-events", note: "Events feature + public pages." },
      { slug: "private-1-1", note: "Private classes." },
      { slug: "semi-private-small-group", note: "E.g., ‘duo’ private products." },
      { slug: "virtual-live-video", note: "Online/livestream classes." },
      { slug: "on-demand-recorded-content", note: "VOD library/playlists." }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Series + permanent spots/rolling reservations." },
      { slug: "rolling-enrollments", note: "Add yogi to ‘all following’ in a series." },
      { slug: "fixed-date-courses", note: "Multi-week courses/workshops." },
      { slug: "waitlist-for-courses", note: "Waitlist configurable across classes." }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Available spots shown/hidden per capacity." },
      { slug: "waitlist", note: "Enable waitlists per class." },
      { slug: "auto-promotion-from-waitlist", note: "Auto-move with configurable cut-off hours." },
      { slug: "booking-window-open-close", note: "Set globally/per class." },
      { slug: "cut-off-time-before-start", note: "Booking & cancellation windows." },
      { slug: "late-cancel-rules", note: "Late cancellations deduct credit." }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Location field incl. outdoor/hybrid guidance." },
      { slug: "instructors", note: "Multi-teacher accounts & permissions." }
    ],
    "calendar-sync": [
      { slug: "ics-feed-1-way", note: "Per-class ‘Add to Calendar/iCal’ links (no full subscription feed documented)." }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Mark attendance in browser (mobile/desktop)." },
      { slug: "mobile-app-check-in", note: "No (teacher actions via browser; apps are for yogis)." }
    ],
    "forms-and-waivers": [
      { slug: "e-sign-waivers", note: "Liability waiver acceptance tracked per yogi." }
    ],
    "booking-models": [
      { slug: "guest-checkout", note: "No (account required)." },
      { slug: "account-required", note: "Yes." },
      { slug: "family-group-bookings", note: "Bring one or more guests in one booking." },
      { slug: "multi-attendee-in-one-booking", note: "Guest booking deducts extra credits automatically." }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Automated emails incl. confirmations, reminders, renewals." },
      { slug: "custom-templates", note: "Customizable emails on Plus plan." },
      { slug: "automated-waitlist-messages", note: "Auto email when moved from waitlist." }
    ],
    "payment-gateways": [
      { slug: "stripe", note: "Stripe/Stripe Connect." },
      { slug: "paypal", note: "Native PayPal integration." },
      { slug: "mollie", note: "Supported (API v2)." }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Via gateways." },
      { slug: "apple-pay", note: "Supported." },
      { slug: "google-pay", note: "Supported." },
      { slug: "klarna", note: "Buy Now Pay Later supported." },
      { slug: "bank-transfer", note: "Wire transfer / pay later option." },
      { slug: "sepa-direct-debit", note: "Supported." },
      { slug: "ideal", note: "Supported." },
      { slug: "bancontact", note: "Supported." },
      { slug: "eps", note: "Supported." },
      { slug: "przelewy24", note: "Supported." },
      { slug: "cash", note: "Pay at studio." }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Single classes." },
      { slug: "class-packs-punch-cards", note: "Class passes with credits/validity." },
      { slug: "memberships-subscriptions", note: "Recurring memberships supported." },
      { slug: "intro-offers", note: "Trial passes and introductory offers." },
      { slug: "pay-what-you-want", note: "Donation-based classes." }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Recurring memberships." }
    ],
    "taxes-and-invoicing": [
      { slug: "vat-gst-hst", note: "VAT supported; set % per product." },
      { slug: "multiple-tax-rates", note: "Per-product VAT %." },
      { slug: "invoices", note: "Downloadable invoices; payment confirmations by email." }
    ],
    "discounts-and-credits": [
      { slug: "coupon-codes", note: "Promo codes on Plus plan." }
    ],
    "risk-and-compliance": [
      { slug: "chargeback-management", note: "Disputes/chargebacks guidance article." },
      { slug: "gdpr", note: "Privacy statement & GDPR notes." }
    ],
    "currency": [
      { slug: "multi-currency-pricing", note: "Set studio currency & local currency for products." }
    ],
    "profiles": [
      { slug: "medical-notes", note: "Yogis can leave comments; staff notes may record injuries." }
    ],
    "memberships": [
      { slug: "freezes-holds", note: "Pause recurring memberships." },
      { slug: "usage-limits", note: "Credits/validity via passes/memberships." },
      { slug: "access-control-by-membership", note: "Restrict classes to specific products." }
    ],
    "passes": [
      { slug: "class-packs", note: "Passes with validity periods." },
      { slug: "expiration-rules", note: "Validity per pass." }
    ],
    "admin-and-permissions": [
      { slug: "role-based-permissions", note: "Teacher roles & permission levels." }
    ],
    "compensation": [
      { slug: "payroll-export", note: "Teacher export for payouts/reporting." }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Yogi profiles, orders, notes; exports." },
      { slug: "lead-capture-forms", note: "Studio signup/registration; add yogi manually." }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Mailchimp integration." },
      { slug: "promo-codes", note: "Promo/coupon codes (Plus plan)." },
      { slug: "landing-pages", note: "Studio microsite & event pages." }
    ]
  }
},
{
  id: "ubindi",
  name: "Ubindi",
  url: "https://www.ubindi.com/",
  additionalInfo: [
    "Privacy-first: Ubindi says it does not use Google/Facebook tracking products in the app.",
    "No native mobile apps by design; responsive web app for both admins and students.",
    "Simple Zoom flow with a ‘magic join’ button; attendance auto-captured on join.",
    "Lightweight admin model: one admin per account; no multi-teacher resource assignment.",
    "Donation-based pricing supported.",
    "On-demand video library without hosting (link YouTube/Vimeo/Zoom; Ubindi handles access/payments).",
    "Non-profit perk: free Essential plan upgrade for qualifying charities."
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Embeddable schedule widget." },
      { slug: "embedded-iframe", note: "Widget is an iFrame." },
      { slug: "branded-microsite", note: "Public Ubindi page per teacher for bookings." },
      { slug: "phone-in-person-entry", note: "Teacher can add/tick students and create brand-new students." }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Standard class signup & attendance." },
      { slug: "course-multi-session-series", note: "Recurring series; can gate a series behind a special pass." },
      { slug: "workshops-events", note: "One-off classes treated like single sessions." },
      { slug: "private-1-1", note: "Private lessons supported; can be packaged." },
      { slug: "semi-private-small-group", note: "Explicitly referenced pricing pattern." },
      { slug: "virtual-live-video", note: "Zoom/online links with ‘join’ flow." },
      { slug: "on-demand-recorded-content", note: "Video library with paid access tied to passes/memberships." }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Edit ‘all future days’ for a series." },
      { slug: "fixed-date-courses", note: "Achievable by tying a series to a required pass." }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "‘Spots’ field per class." }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Manage locations (online or physical)." },
      { slug: "instructors", note: "Limitation: only one admin; no multi-teacher assignment." }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Attendance taking on web (mobile-friendly)." }
    ],
    "forms-and-waivers": [
      { slug: "e-sign-waivers", note: "Policy/waiver acceptance required before registering/buying." }
    ],
    "booking-models": [
      { slug: "account-required", note: "Students must sign up/verify email to register." }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Confirmation + ~15-minute reminder before class." }
    ],
    "payment-gateways": [
      { slug: "stripe", note: "Native; student payments go to your Stripe account." }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Via Stripe." },
      { slug: "cash", note: "Offline accepted; assign passes and track usage." },
      { slug: "cheque", note: "Offline accepted; track usage." }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Fixed price or free." },
      { slug: "class-packs-punch-cards", note: "Passes with credits & expiry." },
      { slug: "memberships-subscriptions", note: "Weekly/monthly/yearly autobilling." },
      { slug: "pay-what-you-want", note: "Donation-based pricing." }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Memberships auto-renew via Stripe." }
    ],
    "taxes-and-invoicing": [
      { slug: "receipts", note: "Receipts/booking confirmations sent by email; deeper tax/accounting handled in Stripe." }
    ],
    "discounts-and-credits": [
      { slug: "referral-discounts", note: "Built-in student referral program issues free class credit." }
    ],
    "profiles": [
      { slug: "tags-segments", note: "Student tagging and group emailing." }
    ],
    "memberships": [
      { slug: "cancellation-policies", note: "You or the student can cancel; deactivate/reactivate flows." }
    ],
    "passes": [
      { slug: "class-packs", note: "Passes with credits and validity period." },
      { slug: "expiration-rules", note: "Set pass validity period." }
    ],
    "admin-and-permissions": [
      { slug: "role-based-permissions", note: "Not available; single admin per account (documented limitation)." }
    ],
    "scheduling-and-availability": [
      { slug: "time-off", note: "Set a holiday to cancel a date range of classes." }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Student list, history, tagging, emailing." }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Plain-text broadcast emails (no template builder)." },
      { slug: "landing-pages", note: "Public Ubindi page acts as a landing page." }
    ],
    "ads-and-tracking": [
      { slug: "facebook-ads-pixel", note: "No: Ubindi avoids FB/Google products inside the app (privacy stance)." }
    ]
  }
}, {
  id: "fitdegree",
  name: "fitDEGREE",
  url: "https://fitdegree.com/",
  additionalInfo: [
    "Spot Booking: interactive seat/spot selection (e.g., reformers/bikes) with social seating.",
    "Full PWA stack: consumer app, staff “On the Go” app, and Kiosk run as progressive web apps.",
    "Built-in social layer: announcements feed and in-app chat.",
    "Referrals: native referral codes/links with funnel reporting.",
    "Family relationships & shared balances across accounts.",
    "Embedded payments via Payrix (Worldpay for Platforms); privacy policy also mentions Payabli.",
    "Published processing fees: ~2.9% + $0.30 for cards; ACH flat fee (docs reference ~$1 or $0.50)."
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Native widgets for schedule, 1:1s, announcements." },
      { slug: "embedded-iframe", note: "Widgets embed iFrames of the web app." },
      { slug: "branded-microsite", note: "Public web app at app.fitdegree.com with share links." },
      { slug: "ios-app", note: "Standard and optional branded app (App Store)." },
      { slug: "android-app", note: "Standard and optional branded app (Google Play)." },
      { slug: "facebook-instagram-booking", note: "Bookings driven via sharable web portal links from social." },
      { slug: "google-reserve", note: "Can’t find information." },
      { slug: "phone-in-person-entry", note: "Admins add/register clients; staff OTG app supports check-in & registration." },
      { slug: "kiosk-self-service", note: "Dedicated kiosk PWA (kiosk.fitdegree.com)." },
      { slug: "custom-portal-via-api", note: "API keys & webhooks under Integrations." }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Drop-in fees referenced in policies." },
      { slug: "course-multi-session-series", note: "Series registrables." },
      { slug: "workshops-events", note: "Events registrables." },
      { slug: "private-1-1", note: "One-on-One services." },
      { slug: "semi-private-small-group", note: "Can’t find information." },
      { slug: "virtual-live-video", note: "Add live-stream links to sessions and 1:1s." },
      { slug: "on-demand-recorded-content", note: "Can’t find information." }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Recurring schedules supported; recurring regs visible in profiles." },
      { slug: "rolling-enrollments", note: "Can’t find information." },
      { slug: "fixed-date-courses", note: "Series." },
      { slug: "waitlist-for-courses", note: "Not documented (waitlist clearly for classes)." }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Waitlist triggers only when full." },
      { slug: "equipment-based-capacity", note: "Spot Booking with equipment/spot layouts." },
      { slug: "overbooking-allowance", note: "Can’t find information." },
      { slug: "waitlist", note: "Client sees position; timed offers to claim." },
      { slug: "auto-promotion-from-waitlist", note: "No — invite must be confirmed by client." },
      { slug: "booking-window-open-close", note: "Can’t find information." },
      { slug: "cut-off-time-before-start", note: "Can’t find information." },
      { slug: "late-cancel-rules", note: "Prebuilt & custom policies with windows/fees." },
      { slug: "no-show-fee", note: "No-show billing behavior indicated on check-in screen." },
      { slug: "grace-periods", note: "12-hour window post-class to mark attendance before auto no-show." },
      { slug: "buffer-times-between-classes", note: "Can’t find information." }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Locations manager with addresses." },
      { slug: "equipment", note: "Managing Equipment Types; supports spot/equipment maps." },
      { slug: "instructors", note: "Team Members and payscales/payrules." },
      { slug: "multiple-resources-per-booking", note: "Can’t find information." },
      { slug: "conflict-detection-prevention", note: "Marketing claims no more double-booking (implies prevention)." }
    ],
    "calendar-sync": [
      { slug: "google-calendar-2-way", note: "Via Zapier (not native 2-way)." },
      { slug: "outlook-2-way", note: "Can’t find information." },
      { slug: "icloud-2-way", note: "Can’t find information." },
      { slug: "ics-feed-1-way", note: "Client-facing Add to Calendar (Google/iCal/Outlook) on share pages." }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "From admin and OTG app." },
      { slug: "mobile-app-check-in", note: "Team members can check in via phones (OTG app)." },
      { slug: "kiosk-ipad-check-in", note: "Kiosk PWA." },
      { slug: "qr-code-barcode-scanning", note: "Can’t find information for check-ins (QR used in marketing, not documented for scan-to-check-in)." }
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "Can’t find information." },
      { slug: "e-sign-waivers", note: "Digital waivers; signatures tracked; can request signature." },
      { slug: "per-class-forms", note: "Waivers/contracts attachable to classes, 1:1s, events, series, memberships." },
      { slug: "custom-fields", note: "Profile requirements configurable (limited vs full custom builder)." },
      { slug: "parental-consent", note: "Parent/guardian relationships exist." }
    ],
    "booking-models": [
      { slug: "guest-checkout", note: "Can’t find information." },
      { slug: "account-required", note: "Account creation during registration." },
      { slug: "family-group-bookings", note: "Relationships and shareable items." }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Automated emails (e.g., waitlist/cancellation)." },
      { slug: "sms-reminders", note: "Can’t find information." },
      { slug: "push-notifications", note: "Waitlist notifications, etc." },
      { slug: "custom-templates", note: "System emails listed; no template editor shown." },
      { slug: "automated-waitlist-messages", note: "Timed invites via email/push." }
    ],
    "payment-gateways": [
      { slug: "integrated-processor", note: "Payrix (Worldpay for Platforms); Payabli also referenced." }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Via embedded Payrix." },
      { slug: "apple-pay", note: "Claimed supported for in-person via swiper (testimonial)." },
      { slug: "google-pay", note: "Claimed supported (testimonial)." },
      { slug: "ach-debit", note: "ACH supported." },
      { slug: "cash", note: "POS flows & refunds to account balance." }
    ],
    "point-of-sale-in-person": [
      { slug: "card-reader", note: "Card readers via Payrix; in-person payments supported." },
      { slug: "receipt-printer", note: "Can’t find information." },
      { slug: "barcode-scanner", note: "Gift cards use mag-stripe/printed code; scanner not documented." }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Drop-ins." },
      { slug: "class-packs-punch-cards", note: "Packages/passes." },
      { slug: "memberships-subscriptions", note: "Continual and fixed-number memberships." },
      { slug: "intro-offers", note: "Intro offers available." },
      { slug: "corporate-rates", note: "Possible via tag-based auto-discounts." },
      { slug: "student-senior-rates", note: "Possible via tag-based auto-discounts." }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Autopay memberships; reporting for clients on autopay." },
      { slug: "installments", note: "Memberships can be a fixed # of payments." }
    ],
    "taxes-and-invoicing": [
      { slug: "automatic-tax-calculation", note: "Sales tax features folder exists (details not visible here)." },
      { slug: "invoices", note: "Receipts available; sales/transactions reporting." },
      { slug: "credit-notes", note: "Refunds and account balance credits supported." }
    ],
    "discounts-and-credits": [
      { slug: "coupon-codes", note: "Promotional codes." },
      { slug: "auto-discounts", note: "Tag-based automatic discounts." },
      { slug: "referral-discounts", note: "Referral tracking; studio can discount accordingly." },
      { slug: "loyalty-points-redemption", note: "Via Perkville integration." },
      { slug: "gift-cards", note: "Digital codes and physical mag-stripe; balance checks." },
      { slug: "store-credit", note: "Refund to on-account balance." }
    ],
    "risk-and-compliance": [
      { slug: "pci-dss-compliance", note: "Processors handle PCI; fitDEGREE does not store card data." },
      { slug: "3-d-secure-sca", note: "Handled by Payrix/Worldpay (no fitDEGREE-specific statement)." }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Relationships + shared items." },
      { slug: "medical-notes", note: "Health considerations/memos on client profile & rosters." },
      { slug: "tags-segments", note: "Client tags for filtering & discounts." }
    ],
    "memberships": [
      { slug: "contract-terms", note: "Contracts can be created in Waivers section." },
      { slug: "freezes-holds", note: "Freezes/holds supported." },
      { slug: "cancellation-policies", note: "Per class group/registrable policies." },
      { slug: "access-control-by-membership", note: "Eligible classes/services defined by membership." }
    ],
    "passes": [
      { slug: "class-packs", note: "Passes/packs supported." },
      { slug: "shareable-passes", note: "Shareable via relationships." }
    ],
    "admin-and-permissions": [
      { slug: "role-based-permissions", note: "Team Member, Manager, fitSpot Admin, Company Admin." }
    ],
    "scheduling-and-availability": [
      { slug: "staff-scheduling", note: "Live schedule + one-on-one scheduler." },
      { slug: "availability-rules", note: "Availability & exceptions." },
      { slug: "time-off", note: "Team member/global exceptions." }
    ],
    "compensation": [
      { slug: "payroll-export", note: "Reports include Team Member Payouts." },
      { slug: "commission-structures", note: "Payrules/payscales for classes & 1:1." }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Client profiles, tags, memos, activity." }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Mailchimp integration; in-app Announcements feed." },
      { slug: "marketing-automation", note: "Via partners (e.g., LoopSpark)." },
      { slug: "promo-codes", note: "Promo codes supported." },
      { slug: "landing-pages", note: "Booking pages via the web app microsite." }
    ]
  }
},
{
  id: "upper-hand",
  name: "Upper Hand",
  url: "https://upperhand.com/",
  additionalInfo: [
    "Integrated processor: Paysafe/NETBANX.",
    "WebKit site builder + embeddable widget for SEO-optimized booking pages.",
    "Kiosk Mode for self check-in.",
    "Client QR codes; barcode scanner support for quick lookup/check-in.",
    "AI dashboards & automation (“Upper Hand AI”).",
    "Athlete Progression Tracking (programs & progress).",
    "Documented hardware ecosystem (PAX A920, receipt printers, barcode scanners)."
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Upper Hand website widget + browse-events widget." },
      { slug: "branded-microsite", note: "Client-facing Browse Events pages." },
      { slug: "ios-app", note: "Can’t find store-specific docs (mobile app exists)." },
      { slug: "android-app", note: "Can’t find store-specific docs (mobile app exists)." },
      { slug: "phone-in-person-entry", note: "POS + Quick Schedule workflows for staff." },
      { slug: "kiosk-self-service", note: "Kiosk Mode self check-in." },
      { slug: "custom-portal-via-api", note: "Developer API referenced." }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Open Booking sessions." },
      { slug: "course-multi-session-series", note: "Classes with multiple schedules; Camps/Clinics." },
      { slug: "workshops-events", note: "Events (camps/clinics, etc.)." },
      { slug: "private-1-1", note: "Private lessons." },
      { slug: "semi-private-small-group", note: "Group lessons." }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Classes support multiple schedules/ongoing sessions." },
      { slug: "fixed-date-courses", note: "Fixed-schedule style events (e.g., camps)." },
      { slug: "waitlist-for-courses", note: "Supported; fixed-schedule actions are manual." }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Event Size per session." },
      { slug: "waitlist", note: "Waitlist available." },
      { slug: "auto-promotion-from-waitlist", note: "Not specified; fixed schedules not automated." },
      { slug: "booking-window-open-close", note: "Scheduling Time Frame & registration deadlines." },
      { slug: "cut-off-time-before-start", note: "Scheduling Deadline." },
      { slug: "late-cancel-rules", note: "Cancellation Deadline setting." },
      { slug: "no-show-fee", note: "No-show indicator exists; fee not specified." }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Facility & resource management; resource calendar." },
      { slug: "equipment", note: "Resources (e.g., cages) can be assigned." },
      { slug: "instructors", note: "Assign staff; optionally let client choose staff." },
      { slug: "multiple-resources-per-booking", note: "Usage Single vs All." },
      { slug: "conflict-detection-prevention", note: "Double-booking prevention." }
    ],
    "calendar-sync": [
      { slug: "google-calendar-2-way", note: "Google & iCalendar sync referenced; direction not specified." },
      { slug: "ics-feed-1-way", note: "iCalendar/ICS sync supported." }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Check clients in from calendar." },
      { slug: "mobile-app-check-in", note: "Mobile check-in supported." },
      { slug: "kiosk-ipad-check-in", note: "Kiosk Mode." },
      { slug: "qr-code-barcode-scanning", note: "Client Profile QR; barcode scanners supported." }
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "Custom registration fields." },
      { slug: "e-sign-waivers", note: "Require/collect waivers digitally." },
      { slug: "per-class-forms", note: "Registration fields per event/class." },
      { slug: "custom-fields", note: "Yes, custom registration fields." }
    ],
    "booking-models": [
      { slug: "guest-checkout", note: "Not supported; account required to purchase." },
      { slug: "account-required", note: "Yes." },
      { slug: "family-group-bookings", note: "Family profiles / manage multiple athletes." },
      { slug: "corporate-team-bookings", note: "Teams module." },
      { slug: "multi-attendee-in-one-booking", note: "Buy same credit pass for multiple profiles in one cart." }
    ],
    "notifications": [
      { slug: "email-reminders", note: "RSVP reminders & email communications." },
      { slug: "sms-reminders", note: "SMS texting exists; reminder automation not specified." },
      { slug: "push-notifications", note: "Push notifications mentioned in privacy policy." },
      { slug: "custom-templates", note: "Marketing email templates." }
    ],
    "payment-gateways": [
      { slug: "integrated-processor", note: "Paysafe/NETBANX (in-platform processing)." }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Supported." },
      { slug: "apple-pay", note: "Supported." },
      { slug: "google-pay", note: "Supported." },
      { slug: "ach-debit", note: "ACH via NETBANX." },
      { slug: "cash", note: "POS supports cash." },
      { slug: "cheque", note: "POS supports check." }
    ],
    "point-of-sale-in-person": [
      { slug: "card-reader", note: "PAX A920 smart terminal." },
      { slug: "tap-to-pay", note: "Terminal supports tap; phone-native Tap to Pay not stated." },
      { slug: "receipt-printer", note: "Receipt printing supported." },
      { slug: "barcode-scanner", note: "Honeywell scanner setup; scans QR codes." }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Per-session list price." },
      { slug: "class-packs-punch-cards", note: "Credit Passes / packages." },
      { slug: "memberships-subscriptions", note: "Auto-renewing memberships." }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Recurring plans for memberships." },
      { slug: "split-payments", note: "Split Payments supported." },
      { slug: "installments", note: "Payment Plans; edit future installments." }
    ],
    "taxes-and-invoicing": [
      { slug: "invoices", note: "Invoicing feature + purchase invoices setting." }
    ],
    "discounts-and-credits": [
      { slug: "coupon-codes", note: "Coupons supported." },
      { slug: "auto-discounts", note: "Auto member discounts." },
      { slug: "gift-cards", note: "Gift Cards area in Payments." },
      { slug: "store-credit", note: "Account Credit supported." }
    ],
    "risk-and-compliance": [
      { slug: "pci-dss-compliance", note: "PCI statement present." },
      { slug: "chargeback-management", note: "Paysafe/NETBANX handling referenced." }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Managed family profiles." },
      { slug: "medical-notes", note: "Collect medical release/personal athlete info." },
      { slug: "tags-segments", note: "Contact segmentation features." }
    ],
    "memberships": [
      { slug: "contract-terms", note: "Commitment length, join fee, auto-cancel at end." },
      { slug: "access-control-by-membership", note: "Member-only access/discounts." }
    ],
    "passes": [
      { slug: "class-packs", note: "Credit Passes." }
    ],
    "admin-and-permissions": [
      { slug: "role-based-permissions", note: "Preset user permission levels." }
    ],
    "scheduling-and-availability": [
      { slug: "staff-scheduling", note: "Assign staff; manage multi-schedules; staff unavailability." },
      { slug: "availability-rules", note: "Scheduling Time Frame, blackouts, intervals." },
      { slug: "time-off", note: "Staff Unavailability feature." }
    ],
    "compensation": [
      { slug: "payroll-export", note: "Payroll Report (export & timezone options)." },
      { slug: "performance-dashboards", note: "Analytics & AI dashboards." }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Contact Management; add leads internally." }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Built-in email campaigns." },
      { slug: "sms-marketing", note: "Send texts to clients." },
      { slug: "marketing-automation", note: "Automation features available." },
      { slug: "promo-codes", note: "Coupons supported." },
      { slug: "landing-pages", note: "Event pages; WebKit websites." },
      { slug: "seo-tools", note: "WebKit provides SEO features." }
    ]
  }
},
{
  id: "clubworx",
  name: "Clubworx",
  url: "https://clubworx.com/",
  additionalInfo: [
    "24/7 access control integrations (Innertelligence & Brivo): mobile entry, RFID cards/fobs, QR entry.",
    "Automatic make-up & rollover classes with granular rules.",
    "Credit vouchers with family sharing and expiry.",
    "“Book & Pay” deep links for specific classes/series.",
    "Branded customer mobile app with proximity check-in and family bookings.",
    "Flexible website widgets; can be read-only to disable off-site booking."
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Embeddable timetable/booking widget." },
      { slug: "embedded-iframe", note: "Widgets embedded via HTML/iframe." },
      { slug: "branded-microsite", note: "Hosted microsites with calendars & registration." },
      { slug: "ios-app", note: "Member mobile app (branded options) incl. booking, payments, waitlist, proximity check-in." },
      { slug: "android-app", note: "Member mobile app (Android)." },
      { slug: "phone-in-person-entry", note: "Staff add members into events from calendar or profile." },
      { slug: "kiosk-self-service", note: "Class and General Kiosk modes; self check-in." }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "One-off events + Book & Pay links." },
      { slug: "course-multi-session-series", note: "Recurring series & series bookings." },
      { slug: "workshops-events", note: "Events & grading events with RSVP/fees." },
      { slug: "private-1-1", note: "Personal training/appointments & trainer availability." },
      { slug: "semi-private-small-group", note: "Supported via classes/appointments with capacities." },
      { slug: "virtual-live-video", note: "Zoom integration." }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Daily/weekly/monthly repeats." },
      { slug: "rolling-enrollments", note: "Recurring bookings auto-enrol into future generated classes." },
      { slug: "fixed-date-courses", note: "Create non-recurring (fixed-date) events." },
      { slug: "waitlist-for-courses", note: "Waitlist with auto notifications." }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Max attendees per event." },
      { slug: "waitlist", note: "First-come, first-served; email on promotion." },
      { slug: "auto-promotion-from-waitlist", note: "Next in line auto-booked & emailed." },
      { slug: "booking-window-open-close", note: "Widget can be read-only; advanced booking limits for prospects." },
      { slug: "cut-off-time-before-start", note: "Late cancellation window blocks cancellation after cutoff." },
      { slug: "late-cancel-rules", note: "Late-cancel with fee options." },
      { slug: "no-show-fee", note: "Cancellation/late-cancel fees supported." }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Locations/rooms for events." },
      { slug: "instructors", note: "Assign trainers; manage trainer availability." }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Attendance & roll call." },
      { slug: "mobile-app-check-in", note: "Proximity and QR check-in via app." },
      { slug: "kiosk-ipad-check-in", note: "Class & general kiosks." },
      { slug: "qr-code-barcode-scanning", note: "QR entry & POS scanner check-ins." },
      { slug: "nfc-rfid", note: "RFID cards/key fobs via integrations." },
      { slug: "turnstile-door-access-integration", note: "Access control with Innertelligence/Brivo." }
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "Smart forms/waivers with custom sections & fields." },
      { slug: "e-sign-waivers", note: "Electronic signatures on hosted waiver pages." },
      { slug: "parental-consent", note: "Guardian signing for dependents supported." },
      { slug: "custom-fields", note: "Text, checkbox, date, etc." }
    ],
    "booking-models": [
      { slug: "guest-checkout", note: "“Book & Pay” weblink for prospects (no login)." },
      { slug: "account-required", note: "Member app/portal requires account." },
      { slug: "family-group-bookings", note: "Families can book from one account; book a friend on a member’s membership." }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Booking reminder automations." },
      { slug: "sms-reminders", note: "SMS + automations (pricing/help available)." },
      { slug: "push-notifications", note: "In-app notifications/reminders." },
      { slug: "custom-templates", note: "Email/SMS templates with automation builder." },
      { slug: "automated-waitlist-messages", note: "Auto email when promoted from waitlist." }
    ],
    "payment-gateways": [
      { slug: "stripe", note: "Supported (region-specific)." },
      { slug: "bluefin", note: "Supported." },
      { slug: "ezidebit", note: "Supported." },
      { slug: "gocardless", note: "Supported (bank debits UK/EU)." },
      { slug: "payrix", note: "Supported (Integrapay)." }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Via Stripe/Bluefin/Ezidebit/Payrix." },
      { slug: "bank-transfer", note: "Direct debit/ACH via gateways; GoCardless for EU/UK." }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Book & Pay." },
      { slug: "class-packs-punch-cards", note: "Class Pass Memberships." },
      { slug: "memberships-subscriptions", note: "Ongoing memberships & billing." },
      { slug: "intro-offers", note: "Introductory offers." },
      { slug: "free-trials", note: "Trial calendars & trial memberships." },
      { slug: "tiered-pricing", note: "Multiple memberships with different limits." }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Recurring memberships." },
      { slug: "dunning-retry-logic", note: "Auto-reschedule failed payments; automations for failures." },
      { slug: "deposits", note: "Upfront/setup fee on memberships." }
    ],
    "taxes-and-invoicing": [
      { slug: "invoices", note: "View/resend invoice receipts; search by invoice number." }
    ],
    "discounts-and-credits": [
      { slug: "store-credit", note: "Credit vouchers can be issued/applied; family sharing & expiry." }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Family sign-ups and shared wallets." },
      { slug: "emergency-contacts", note: "Emergency Contact section in waivers." },
      { slug: "medical-notes", note: "Custom questions/fields; store medical info." },
      { slug: "tags-segments", note: "Contact flags/segments." }
    ],
    "memberships": [
      { slug: "contract-terms", note: "Terms/conditions included in waivers." },
      { slug: "freezes-holds", note: "Bulk suspend/holds supported." },
      { slug: "carryover-rules", note: "Automatic make-up/rollover classes." },
      { slug: "cancellation-policies", note: "Late cancel windows at event level; terms in waivers." },
      { slug: "usage-limits", note: "Weekly/period limits; class-type eligibility." },
      { slug: "access-control-by-membership", note: "Limit access to event types; hardware can enforce status." }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Full CRM for members/prospects with tasks/alerts." },
      { slug: "lead-capture-forms", note: "Embeddable site forms create leads." },
      { slug: "lead-pipeline-stages", note: "Sales pipeline/contact pipeline referenced." }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Bulk email, templates, automations." },
      { slug: "sms-marketing", note: "Bulk SMS + automations." },
      { slug: "marketing-automation", note: "Triggers for booking created/canceled, late cancel, attendance, etc." },
      { slug: "landing-pages", note: "Hosted website pages & Book & Pay links." }
    ]
  }
},
{
  id: "ezfacility",
  name: "EZFacility",
  url: "https://www.ezfacility.com/",
  additionalInfo: [
    "Sports DNA: EZLeagues for league schedules, standings, embedded registration, and TV displays.",
    "API surface for real-time calendars, access control, business services, and leagues.",
    "PCI DSS Level 1 stated publicly.",
    "Branded mobile app with push notifications and mobile wallet member cards.",
    "Flexible membership ops: proration, freezes/holds, shareable memberships, end-user click-to-cancel.",
    "Integrations: Constellation Payments, Brivo (access), Smartwaiver (e-sign), Perkville (loyalty), QBO, RFID partners."
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Embed registration forms; EZLeagues iFrame; API to surface real-time calendars." },
      { slug: "embedded-iframe", note: "EZLeagues supports iFrame integration." },
      { slug: "branded-microsite", note: "Hosted Self-Service Client Portal + dedicated EZLeagues sites." },
      { slug: "ios-app", note: "Branded mobile app (App Store)." },
      { slug: "android-app", note: "Branded mobile app (Google Play)." },
      { slug: "phone-in-person-entry", note: "Admins register clients & create rentals from back office." },
      { slug: "kiosk-self-service", note: "Self-Service portal + Self Check-In kiosk." },
      { slug: "custom-portal-via-api", note: "API services for calendars, business services, access control, leagues." }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Single Session Package Plans." },
      { slug: "course-multi-session-series", note: "Multiple Session Package Plans; camps/clinics." },
      { slug: "workshops-events", note: "Event registration workflows." },
      { slug: "private-1-1", note: "Private lessons / personal training." },
      { slug: "semi-private-small-group", note: "Group/class scheduling." },
      { slug: "virtual-live-video", note: "Zoom integration." },
      { slug: "on-demand-recorded-content", note: "Video Library in Self-Service." }
    ],
    "recurrence": [
      { slug: "fixed-date-courses", note: "Camps/clinics with date ranges." },
      { slug: "waitlist-for-courses", note: "Waitlist supported and configurable in Self-Service." }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Sessions show remaining spaces/full state." },
      { slug: "waitlist", note: "Waitlist supported." },
      { slug: "auto-promotion-from-waitlist", note: "Auto-book from waitlist available." },
      { slug: "booking-window-open-close", note: "Visible range & booking rules configurable." },
      { slug: "cut-off-time-before-start", note: "Advance booking & cancellation windows configurable." },
      { slug: "late-cancel-rules", note: "Self-Service cancellation settings." },
      { slug: "buffer-times-between-classes", note: "Special Reservation Types can block buffer time." }
    ],
    "resource-allocation": [
      { slug: "rooms-locations", note: "Drag-and-drop resource calendar (venues/rooms)." },
      { slug: "equipment", note: "Locker & equipment tracking; rentable equipment via POS." },
      { slug: "instructors", note: "Assign staff; staff scheduling." },
      { slug: "multiple-resources-per-booking", note: "Multi-scheduling a trainer + venue." },
      { slug: "conflict-detection-prevention", note: "Designed to eliminate scheduling conflicts." }
    ],
    "calendar-sync": [
      { slug: "google-calendar-2-way", note: "Not 2-way; subscribe via ICS." },
      { slug: "outlook-2-way", note: "ICS subscription." },
      { slug: "icloud-2-way", note: "ICS subscription." },
      { slug: "ics-feed-1-way", note: "Subscribe to schedules via ICS." }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Front Desk Check-In tools." },
      { slug: "kiosk-ipad-check-in", note: "Self Check-In at tablet/desktop." },
      { slug: "qr-code-barcode-scanning", note: "Barcode scanner supported for check-in." },
      { slug: "nfc-rfid", note: "RFID member cards/readers via partners." },
      { slug: "turnstile-door-access-integration", note: "Brivo access control integration." }
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "EZSignUp form builder & event forms." },
      { slug: "e-sign-waivers", note: "Document templates + Smartwaiver integration." },
      { slug: "custom-fields", note: "Required registration fields configurable." }
    ],
    "booking-models": [
      { slug: "guest-checkout", note: "Guest checkouts supported online." },
      { slug: "account-required", note: "Client accounts/profiles supported." },
      { slug: "family-group-bookings", note: "Relationships & group registration." },
      { slug: "corporate-team-bookings", note: "Teams/leagues supported." },
      { slug: "multi-attendee-in-one-booking", note: "Online multi-enrollments." },
      { slug: "add-on-upsells-at-checkout", note: "Membership add-ons (packages/items) at checkout." }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Automatic email reminders; Advanced Email Campaigns." },
      { slug: "sms-reminders", note: "EZMessaging (Textmunication)." },
      { slug: "push-notifications", note: "Via branded mobile app." }
    ],
    "payment-gateways": [
      { slug: "integrated-processor", note: "EZPayments / Constellation Payments (preferred); Global Payments also supported in contexts." }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Supported." },
      { slug: "ach-debit", note: "Direct Debit/ACH/EFT supported." },
      { slug: "cash", note: "Record external cash payments in Billing." },
      { slug: "cheque", note: "Record external check payments in Billing." }
    ],
    "point-of-sale-in-person": [
      { slug: "receipt-printer", note: "QZ Tray receipt printing supported." }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Single-session packages." },
      { slug: "class-packs-punch-cards", note: "Multiple-session packages." },
      { slug: "memberships-subscriptions", note: "Plans with auto-renew." },
      { slug: "free-trials", note: "Possible via $0/free packages." }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Auto-renew memberships." },
      { slug: "proration", note: "Membership prorate options." },
      { slug: "dunning-retry-logic", note: "DD Failures reports; SMS aids for collections." },
      { slug: "deposits", note: "Deposits report available." },
      { slug: "installments", note: "Payment Schedules supported." }
    ],
    "taxes-and-invoicing": [
      { slug: "vat-gst-hst", note: "Tax codes support HST/PST/GST/VAT." },
      { slug: "multiple-tax-rates", note: "Separate, non-compounded codes." },
      { slug: "invoices", note: "Invoicing & reports." },
      { slug: "store-credit", note: "Unapplied payments tracked as on-account funds." }
    ],
    "discounts-and-credits": [
      { slug: "coupon-codes", note: "Online promo/discount codes." },
      { slug: "loyalty-points-redemption", note: "Perkville integration." }
    ],
    "risk-and-compliance": [
      { slug: "pci-dss-compliance", note: "PCI DSS Level 1." }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Relationships linking family members." },
      { slug: "tags-segments", note: "Client Categories." }
    ],
    "memberships": [
      { slug: "contract-terms", note: "Membership contracts & plan setup." },
      { slug: "freezes-holds", note: "Freeze a membership supported." },
      { slug: "cancellation-policies", note: "Click-to-Cancel (disable auto-renew) in Self-Service." },
      { slug: "access-control-by-membership", note: "Brivo/RFID access tied to membership status." }
    ],
    "passes": [
      { slug: "class-packs", note: "Multiple-session packages." },
      { slug: "shareable-passes", note: "Shareable memberships; passes not specified." }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Advanced Email Campaigns." },
      { slug: "sms-marketing", note: "EZMessaging." },
      { slug: "promo-codes", note: "Discount/coupon codes online." },
      { slug: "landing-pages", note: "Hosted Self-Service & EZLeagues pages." }
    ],
    "ads-and-tracking": [
      { slug: "google-analytics", note: "Google Analytics connector for online flows." }
    ]
  }
},
{
  id: "ptminder",
  name: "PTminder",
  url: "https://www.ptminder.com/",
  additionalInfo: [
    "Custom-branded mobile apps (iOS & Android) as a first-party paid add-on.",
    "Regional direct-debit support (GoCardless, Ezidebit, PaySmart, Debitsuccess) beyond Stripe/PayPal.",
    "One-way calendar sync: dedicated Google 1-way (~5-min updates) + universal ICS feeds.",
    "Family Accounts share credits/memberships across members.",
    "Push notifications for trainers and clients via the mobile apps.",
    "Built-in workout, nutrition & assessment tools (beyond bookings)."
  ].join("\n"),
  optionNotes: {
    "booking-channels": [
      { slug: "website-widget", note: "Embed class schedule via iFrame." },
      { slug: "embedded-iframe", note: "Yes (class schedule embed)." },
      { slug: "branded-microsite", note: "Hosted client portal at yourname.ptminder.com." },
      { slug: "ios-app", note: "PTminder app; paid custom-branded iOS apps available." },
      { slug: "android-app", note: "PTminder app; paid custom-branded Android apps available." },
      { slug: "facebook-instagram-booking", note: "Facebook button linking to Client Area (no native IG/Reserve)." },
      { slug: "phone-in-person-entry", note: "Staff add sessions/classes from the calendar." }
    ],
    "class-types": [
      { slug: "drop-in-single-session", note: "Book single sessions." },
      { slug: "private-1-1", note: "Sessions with trainers." },
      { slug: "semi-private-small-group", note: "Group Classes." },
      { slug: "virtual-live-video", note: "Add shared meeting links (e.g., Zoom)." }
    ],
    "recurrence": [
      { slug: "recurring-classes", note: "Repeating/recurring bookings." },
      { slug: "waitlist-for-courses", note: "Class waitlists with auto-promotion." }
    ],
    "capacity-and-time-controls": [
      { slug: "capacity-limit", note: "Remaining spots/full status shown." },
      { slug: "waitlist", note: "Waitlist supported for classes." },
      { slug: "auto-promotion-from-waitlist", note: "First eligible auto-joins and gets an email." },
      { slug: "late-cancel-rules", note: "Cancellation policies for classes." },
      { slug: "no-show-fee", note: "Mark attendance and choose to charge on reconciliation." }
    ],
    "resource-allocation": [
      { slug: "instructors", note: "Trainer accounts; templates assignable to trainers." },
      { slug: "conflict-detection-prevention", note: "Marketed benefit to avoid double bookings." }
    ],
    "calendar-sync": [
      { slug: "google-calendar-2-way", note: "No — one-way push to Google (~5-min updates)." },
      { slug: "outlook-2-way", note: "No — 1-way via subscribed URL." },
      { slug: "icloud-2-way", note: "No — 1-way via subscribed URL." },
      { slug: "ics-feed-1-way", note: "iCal/Outlook/iOS/Google subscribe feeds." }
    ],
    "check-in-and-access": [
      { slug: "staff-check-in", note: "Mark attendance in the app." },
      { slug: "mobile-app-check-in", note: "iOS/Android apps support attendance." }
    ],
    "forms-and-waivers": [
      { slug: "custom-intake-forms", note: "Default & fully custom signup forms." },
      { slug: "e-sign-waivers", note: "Digital signatures on custom forms." },
      { slug: "health-screening", note: "PAR-Q/health forms via custom form builder." },
      { slug: "custom-fields", note: "Add custom client fields; require on forms." }
    ],
    "booking-models": [
      { slug: "account-required", note: "Clients self-register/login to book via Client Area." },
      { slug: "family-group-bookings", note: "Family Accounts share payments/credits." }
    ],
    "notifications": [
      { slug: "email-reminders", note: "Customizable email templates." },
      { slug: "sms-reminders", note: "Auto & manual SMS via purchased credits." },
      { slug: "push-notifications", note: "Trainer & client push via mobile apps." },
      { slug: "custom-templates", note: "18 editable email templates with placeholders." },
      { slug: "automated-waitlist-messages", note: "Email notification on auto-promotion." }
    ],
    "payment-gateways": [
      { slug: "stripe", note: "Supported." },
      { slug: "paypal", note: "Supported." },
      { slug: "gocardless", note: "Supported." },
      { slug: "ezidebit", note: "Supported." },
      { slug: "paysmart", note: "Supported." },
      { slug: "debitsuccess", note: "Supported." }
    ],
    "payment-methods": [
      { slug: "credit-debit-cards-visa-mastercard-amex-discover", note: "Via Stripe/PayPal card." },
      { slug: "bank-transfer", note: "Direct debit via GoCardless/Ezidebit/PaySmart/Debitsuccess (region-dependent)." }
    ],
    "pricing-models": [
      { slug: "single-class", note: "Class templates with pricing." },
      { slug: "class-packs-punch-cards", note: "Packages of sessions/classes." },
      { slug: "memberships-subscriptions", note: "Recurring memberships (Stripe/Direct-debit providers)." }
    ],
    "billing-and-collections": [
      { slug: "recurring-billing", note: "Stripe recurring + Debitsuccess/GoCardless recurring." },
      { slug: "proration", note: "Debitsuccess suspensions can prorate." },
      { slug: "installments", note: "Split recurring payments for packages." }
    ],
    "taxes-and-invoicing": [
      { slug: "invoices", note: "Create/send/track invoices; send receipts." }
    ],
    "profiles": [
      { slug: "family-accounts", note: "Shared use of purchased services & payments." },
      { slug: "medical-notes", note: "Assessments with health metrics & notes." }
    ],
    "memberships": [
      { slug: "contract-terms", note: "Fixed Term / Minimum Term / Ongoing." },
      { slug: "freezes-holds", note: "Payment suspensions (e.g., via Debitsuccess)." },
      { slug: "carryover-rules", note: "Carryover & expiring booking credits." },
      { slug: "usage-limits", note: "Credits per period via memberships/packages." }
    ],
    "passes": [
      { slug: "class-packs", note: "Packages." },
      { slug: "expiration-rules", note: "Expiring credits." },
      { slug: "shareable-passes", note: "Family Accounts allow shared use." }
    ],
    "crm-and-lead-management": [
      { slug: "contact-crm", note: "Built-in CRM: client records, notes, messaging." },
      { slug: "lead-capture-forms", note: "Self-registration creates a Lead." }
    ],
    "campaigns": [
      { slug: "email-marketing", note: "Mailchimp integration add-on." },
      { slug: "sms-marketing", note: "Manual SMS to clients via credits." }
    ]
  }
}

];
