const appsFlyerColumns = [
  "attributed_touch_type",
  "attributed_touch_time",
  "install_time",
  "event_time__apps",
  "event_name",
  "event_value",
  "event_revenue",
  "event_revenue_currency",
  "event_revenue_usd",
  "af_cost_model",
  "af_cost_value",
  "af_cost_currency",
  "event_source",
  "is_receipt_validated",
  "af_prt",
  "media_source",
  "af_channel",
  "af_keywords",
  "install_app_store",
  "af_c_id",
  "af_adset_id",
  "af_ad",
  "af_ad_id",
  "af_ad_type",
  "af_siteid",
  "af_sub_siteid",
  "af_sub1",
  "af_sub2",
  "af_sub3",
  "af_sub4",
  "af_sub5",
  "contributor_1_touch_type",
  "contributor_1_touch_time",
  "contributor_1_af_prt",
  "contributor_1_match_type",
  "contributor_1_media_source",
  "contributor_1_campaign",
  "contributor_2_touch_type",
  "contributor_2_touch_time",
  "contributor_2_af_prt",
  "contributor_2_media_source",
  "contributor_2_campaign",
  "contributor_2_match_type",
  "contributor_3_touch_type",
  "contributor_3_touch_time",
  "contributor_3_af_prt",
  "contributor_3_media_source",
  "contributor_3_campaign",
  "contributor_3_match_type",
  "region__apps",
  "country_code",
  "state",
  "city__apps",
  "postal_code",
  "dma__apps",
  "ip",
  "wifi",
  "operator",
  "carrier",
  "language__apps",
  "appsflyer_id",
  "customer_user_id",
  "android_id",
  "advertising_id",
  "imei",
  "idfa__apps",
  "idfv",
  "amazon_aid",
  "device_type__apps",
  "device_category",
  "platform__apps",
  "os_version__apps",
  "app_version",
  "sdk_version",
  "app_name",
  "bundle_id",
  "is_retargeting",
  "retargeting_conversion_type",
  "is_primary_attribution",
  "af_attribution_lookback",
  "af_reengagement_window",
  "match_type",
  "user_agent",
  "http_referrer",
  "original_url",
  "gp_referrer",
  "gp_click_time",
  "gp_install_begin",
  "gp_broadcast_referrer",
  "custom_data",
  "network_account_id",
  "keyword_match_type",
  "blocked_reason",
  "blocked_reason_value",
  "blocked_reason_rule",
  "blocked_sub_reason",
  "af_web_id",
  "web_event_type",
  "media_type",
  "pid",
  "utm_source",
  "utm_medium",
  "utm_term",
  "utm_content",
  "utm_campaign",
  "device_download_time",
  "deeplink_url",
  "oaid",
  "media_channel",
  "event_url",
  "utm_id",
  "ad_unit",
  "segment",
  "placement",
  "mediation_network",
  "impressions",
  "monetization_network",
  "conversion_type",
  "campaign_type",
  "device_model__apps",
  "att",
  "custom_dimension",
  "is_lat",
  "app_type",
  "keyword_id",
  "validation_reason_value",
  "rejected_reason",
  "fraud_reason",
  "fraud_sub_reason",
  "is_organic",
  "detection_date",
  "store_product_page",
  "ads_date",
  "campaign",
  "af_adset",
  "time_diff",
  "week_media_source",
  "week_campaign",
  "week_af_adset",
  "week_af_ad",
  "day_media_source",
  "day_campaign",
  "day_af_adset",
  "day_af_ad",
  "year__apps",
  "month",
  "week",
  "day",
];

const AmplitudeColumns = [
  "app",
  "device_id",
  "user_id",
  "client_event_time",
  "event_id",
  "session_id",
  "event_type",
  "amplitude_event_type",
  "version_name",
  "platform__ampl",
  "os_name",
  "os_version__ampl",
  "device_brand",
  "device_manufacturer",
  "device_model__ampl",
  "device_family",
  "device_type__ampl",
  "device_carrier",
  "location_lat",
  "location_lng",
  "ip_address",
  "country",
  "language__ampl",
  "library",
  "city__ampl",
  "region__ampl",
  "dma__ampl",
  "event_time__ampl",
  "client_upload_time",
  "server_upload_time",
  "server_received_time",
  "amplitude_id",
  "idfa__ampl",
  "adid",
  "paying",
  "start_version",
  "user_creation_time",
  "uuid",
  "sample_rate",
  "$insert_id",
  "$insert_key",
  "is_attribution_event",
  "amplitude_attribution_ids",
  "partner_id",
  "$schema",
  "processed_time",
  "event_properties.상품명",
  "event_properties.배송구분",
  "event_properties.리퍼럴-1D",
  "event_properties.판매가",
  "event_properties.상품번호",
  "event_properties.정가",
  "event_properties.스토어번호",
  "event_properties.리퍼럴-5D",
  "event_properties.리퍼럴-4D",
  "event_properties.스토어명",
  "event_properties.헬피상품여부",
  "user_properties.장바구니_브랜드_상품_수",
  "user_properties.장바구니상품수",
  "user_properties.회원번호",
  "user_properties.[AppsFlyer]_installed_at",
  "user_properties.장바구니_뷰티_상품_수",
  "user_properties.찜한상품",
  "user_properties.장바구니_스포츠_상품_수",
  "user_properties.[AppsFlyer]_campaign",
  "user_properties.[AppsFlyer]_network_name",
  "user_properties.[AppsFlyer]_media_source",
  "user_properties.장바구니_헬피_상품_수",
  "user_properties.인스톨_연령대",
  "user_properties.장바구니_하루배송_상품_수",
  "user_properties.[AppsFlyer]_adgroup_name",
  "user_properties.[AppsFlyer]_search_term",
  "user_properties.보유포인트",
  "user_properties.장바구니_홈데코_상품_수",
  "user_properties.찜한스토어수",
  "user_properties.찜한스토어",
  "user_properties.미니앱_순서_4",
  "user_properties.미니앱_순서_5",
  "user_properties.미니앱_순서_6",
  "user_properties.온보딩_취향선택",
  "user_properties.미니앱_순서_7",
  "user_properties.미니앱_순서_1",
  "user_properties.미니앱_순서_2",
  "user_properties.미니앱_순서_3",
  "user_properties.회원가입일",
  "user_properties.미니앱_순서_8",
  "user_properties.최근구매일",
  "user_properties.미니앱_순서_9",
  "user_properties.장바구니상품",
  "user_properties.저녁도착_이용횟수",
  "user_properties.[AppsFlyer]_agency",
  "user_properties.총구매수",
  "user_properties.심야_푸시알림_수신_여부",
  "user_properties.새벽도착_이용횟수",
  "user_properties.회원가입연월",
  "user_properties.단말기알림설정",
  "user_properties.장바구니_럭셔리_상품_수",
  "user_properties.장바구니_핸드메이드_상품_수",
  "user_properties.찜한상품수",
  "user_properties.장바구니_쇼핑몰_상품_수",
  "user_properties.장바구니_팬시_상품_수",
  "user_properties.ATT_허용_여부",
  "user_properties.가입경로",
  "user_properties.계정결합인증여부",
  "user_properties.총구매취소수",
  "user_properties.총구매액",
  "user_properties.보유쿠폰",
  "user_properties.푸시알림_수신_여부",
  "user_properties.보유쿠폰수",
  "event_properties.총판매가",
  "event_properties.수량",
  "event_properties.스토어유형",
  "event_properties.옵션2",
  "event_properties.옵션1",
  "event_properties.1차카테고리",
  "event_properties.2차카테고리",
  "event_properties.신상할인여부",
  "event_properties.신상할인여부목록",
  "event_properties.상품명목록",
  "event_properties.상품옵션2목록",
  "event_properties.총판매가목록",
  "event_properties.스토어유형목록",
  "event_properties.상품옵션1목록",
  "event_properties.상품수량목록",
  "event_properties.상품번호목록",
  "event_properties.결제예상금액",
  "event_properties.회원번호",
  "event_properties.하루배송상품여부",
  "event_properties.판매가목록",
  "event_properties.campaign_name",
  "event_properties.device_model",
  "event_properties.os_version",
  "event_properties.message_variation_id",
  "event_properties.app_id",
  "event_properties.campaign_id",
  "event_properties.platform",
  "event_properties.필터_-_하루배송",
  "user_properties.장바구나상품",
  "user_properties.[AppsFlyer]_af_sub5",
  "user_properties.[AppsFlyer]_af_sub1",
  "user_properties.[AppsFlyer]_channel",
  "user_properties.[AppsFlyer]_sub_publisher",
  "user_properties.Profile",
  "user_properties.Date_FirstRunning",
  "event_properties.찜하기수",
  "event_properties.리퍼럴-2D",
  "event_properties.접속유형",
  "event_properties.정렬",
  "event_properties.button_id",
  "event_properties.검색어",
  "event_properties.입력방식",
  "user_properties.[AppsFlyer]_creative_name",
  "event_properties.이동방법",
  "event_properties.리퍼럴-3D",
  "event_properties.이벤트번호",
  "event_properties.기획전명",
  "event_properties.기획전/이벤트속성",
  "event_properties.기획전번호",
  "event_properties.dispatch_id",
  "event_properties.필터_-_가격대_원__-_끝",
  "event_properties.필터_-_대카테고리",
  "event_properties.진행상태",
  "event_properties.텍스트리뷰수",
  "event_properties.전체리뷰수",
  "event_properties.포토리뷰수",
  "event_properties.검색영역",
  "event_properties.리뷰타입",
  "event_properties.리뷰번호",
  "event_properties.리뷰어회원번호",
  "event_properties.리뷰별점",
  "event_properties.리뷰작성일",
  "user_properties.[AppsFlyer]_af_sub2",
  "event_properties.관리자진열여부",
  "event_properties.헬피셀러여부",
  "event_properties.스토어찜수",
  "event_properties.기간",
  "event_properties.주문번호",
  "event_properties.쿠폰번호",
  "event_properties.쿠폰명",
  "event_properties.쿠폰유형",
  "event_properties.결제금액",
  "event_properties.쿠폰유형목록",
  "event_properties.쿠폰명목록",
  "event_properties.상품카테고리명목록",
  "event_properties.쿠폰마감일목록",
  "event_properties.옵션상품개수",
  "event_properties.포인트할인액",
  "event_properties.결제수단",
  "event_properties.쿠폰할인액",
  "event_properties.쿠폰번호목록",
  "event_properties.$revenue",
  "event_properties.$productId",
  "event_properties.$quantity",
  "event_properties.$revenueType",
  "event_properties.$price",
  "event_properties.시도방법",
  "event_properties.가입유형",
  "event_properties.계정타입",
  "user_properties.[AppsFlyer]media_source",
  "user_properties.[AppsFlyer]campaign",
  "user_properties.SNS_연동_계정",
  "event_properties.미니앱명",
  "event_properties.첫주문여부",
  "event_properties.스토어번호목록",
  "event_properties.스토어명목록",
  "event_properties.상품수량",
  "event_properties.주문상세번호",
  "event_properties.쿠폰사용여부",
  "event_properties.신상할인적용여부",
  "event_properties.배송유형",
  "user_properties.referring_domain",
  "user_properties.initial_gclid",
  "user_properties.referrer",
  "user_properties.gclid",
  "user_properties.initial_referring_domain",
  "user_properties.initial_referrer",
  "user_properties.[AppsFlyer]_af_sub4",
  "user_properties.initial_fbclid",
  "user_properties.fbclid",
  "user_properties.utm_source",
  "user_properties.initial_utm_source",
  "user_properties.utm_term",
  "user_properties.utm_medium",
  "user_properties.initial_utm_medium",
  "user_properties.initial_utm_term",
  "user_properties.initial_utm_campaign",
  "user_properties.initial_utm_content",
  "user_properties.utm_campaign",
  "user_properties.utm_content",
  "event_properties.태그명",
  "event_properties.영역명",
  "event_properties.행동유형",
  "event_properties.필터_-_가격대_원__-_시작",
  "event_properties.작성가능리뷰수",
  "event_properties.작성완료리뷰수",
  "event_properties.조닝명",
  "event_properties.이벤트명",
  "event_properties.쿠폰마감일",
  "event_properties.상품옵션3목록",
  "event_properties.필터_-_스타일",
  "event_properties.선택연령대",
  "event_properties.취향목록",
  "event_properties.Q&A수",
  "user_properties.[AppsFlyer]_af_sub3",
  "event_properties.상품옵션4목록",
  "event_properties.옵션3",
  "event_properties.포인트환급액",
  "event_properties.주문취소방법",
  "event_properties.쿠폰환급액",
  "event_properties.주문취소금액",
  "event_properties.문의유형",
  "event_properties.쿠폰할인율",
  "event_properties.필터_-_옵션",
  "event_properties.필터항목",
  "event_properties.필터_-_색상",
  "event_properties.기본배송지",
  "event_properties.필터_-_연령",
  "event_properties.필터_-_1차카테고리",
  "event_properties.필터_-_2차카테고리",
  "event_properties.쿠폰금액",
  "event_properties.추천인코드입력여부",
  "event_properties.생년월일입력여부",
  "s3_upload_time",
  "year__ampl",
  "date",
];

export const HeaderColumns = appsFlyerColumns.concat(AmplitudeColumns);
