// noinspection JSUnusedGlobalSymbols

export interface AddAdmin {
  person_id: PersonId;
  added: boolean;
  auth: string;
}


export interface AddAdminResponse {
  admins: Array<PersonView>;
}


export interface AddModToCommunity {
  community_id: CommunityId;
  person_id: PersonId;
  added: boolean;
  auth: string;
}


export interface AddModToCommunityResponse {
  moderators: Array<CommunityModeratorView>;
}


export interface AdminPurgeComment {
  id: number;
  admin_person_id: PersonId;
  post_id: PostId;
  reason?: string;
  when_: string;
}


export interface AdminPurgeCommentView {
  admin_purge_comment: AdminPurgeComment;
  admin?: Person;
  post: Post;
}


export interface AdminPurgeCommunity {
  id: number;
  admin_person_id: PersonId;
  reason?: string;
  when_: string;
}


export interface AdminPurgeCommunityView {
  admin_purge_community: AdminPurgeCommunity;
  admin?: Person;
}


export interface AdminPurgePerson {
  id: number;
  admin_person_id: PersonId;
  reason?: string;
  when_: string;
}


export interface AdminPurgePersonView {
  admin_purge_person: AdminPurgePerson;
  admin?: Person;
}


export interface AdminPurgePost {
  id: number;
  admin_person_id: PersonId;
  community_id: CommunityId;
  reason?: string;
  when_: string;
}


export interface AdminPurgePostView {
  admin_purge_post: AdminPurgePost;
  admin?: Person;
  community: Community;
}


export interface ApproveRegistrationApplication {
  id: number;
  approve: boolean;
  deny_reason?: string;
  auth: string;
}


export interface BanFromCommunity {
  community_id: CommunityId;
  person_id: PersonId;
  ban: boolean;
  remove_data?: boolean;
  reason?: string;
  expires?: number;
  auth: string;
}


export interface BanFromCommunityResponse {
  person_view: PersonView;
  banned: boolean;
}


export interface BannedPersonsResponse {
  banned: Array<PersonView>;
}


export interface BanPerson {
  person_id: PersonId;
  ban: boolean;
  remove_data?: boolean;
  reason?: string;
  expires?: number;
  auth: string;
}


export interface BanPersonResponse {
  person_view: PersonView;
  banned: boolean;
}


export interface BlockCommunity {
  community_id: CommunityId;
  block: boolean;
  auth: string;
}


export interface BlockCommunityResponse {
  community_view: CommunityView;
  blocked: boolean;
}


export interface BlockPerson {
  person_id: PersonId;
  block: boolean;
  auth: string;
}


export interface BlockPersonResponse {
  person_view: PersonView;
  blocked: boolean;
}


export interface CaptchaResponse {
  png: string;
  wav: string;
  uuid: string;
}


export interface ChangePassword {
  new_password: string;
  new_password_verify: string;
  old_password: string;
  auth: string;
}


export interface Comment {
  id: CommentId;
  creator_id: PersonId;
  post_id: PostId;
  content: string;
  removed: boolean;
  published: string;
  updated?: string;
  deleted: boolean;
  ap_id: string;
  local: boolean;
  path: string;
  distinguished: boolean;
  language_id: LanguageId;
}


export interface CommentAggregates {
  id: number;
  comment_id: CommentId;
  score: number;
  upvotes: number;
  downvotes: number;
  published: string;
  child_count: number;
  hot_rank: number;
}


export type CommentId = number;


export interface CommentReply {
  id: CommentReplyId;
  recipient_id: PersonId;
  comment_id: CommentId;
  read: boolean;
  published: string;
}


export type CommentReplyId = number;


export interface CommentReplyResponse {
  comment_reply_view: CommentReplyView;
}


export interface CommentReplyView {
  comment_reply: CommentReply;
  comment: Comment;
  creator: Person;
  post: Post;
  community: Community;
  recipient: Person;
  counts: CommentAggregates;
  creator_banned_from_community: boolean;
  subscribed: SubscribedType;
  saved: boolean;
  creator_blocked: boolean;
  my_vote?: number;
}


export interface CommentReport {
  id: CommentReportId;
  creator_id: PersonId;
  comment_id: CommentId;
  original_comment_text: string;
  reason: string;
  resolved: boolean;
  resolver_id?: PersonId;
  published: string;
  updated?: string;
}


export type CommentReportId = number;


export interface CommentReportResponse {
  comment_report_view: CommentReportView;
}


export interface CommentReportView {
  comment_report: CommentReport;
  comment: Comment;
  post: Post;
  community: Community;
  creator: Person;
  comment_creator: Person;
  counts: CommentAggregates;
  creator_banned_from_community: boolean;
  my_vote?: number;
  resolver?: Person;
}


export interface CommentResponse {
  comment_view: CommentView;
  recipient_ids: Array<LocalUserId>;
  form_id?: string;
}


export type CommentSortType = "Hot" | "Top" | "New" | "Old";


export interface CommentView {
  comment: Comment;
  creator: Person;
  post: Post;
  community: Community;
  counts: CommentAggregates;
  creator_banned_from_community: boolean;
  subscribed: SubscribedType;
  saved: boolean;
  creator_blocked: boolean;
  my_vote?: number;
}


export interface Community {
  id: CommunityId;
  name: string;
  title: string;
  description?: string;
  removed: boolean;
  published: string;
  updated?: string;
  deleted: boolean;
  nsfw: boolean;
  actor_id: string;
  local: boolean;
  icon?: string;
  banner?: string;
  followers_url: string;
  inbox_url: string;
  hidden: boolean;
  posting_restricted_to_mods: boolean;
  instance_id: InstanceId;
}


export interface CommunityAggregates {
  id: number;
  community_id: CommunityId;
  subscribers: number;
  posts: number;
  comments: number;
  published: string;
  users_active_day: number;
  users_active_week: number;
  users_active_month: number;
  users_active_half_year: number;
  hot_rank: number;
}


export type CommunityBlockId = number;


export interface CommunityBlockView {
  person: Person;
  community: Community;
}


export interface CommunityFollowerView {
  community: Community;
  follower: Person;
}


export type CommunityId = number;


export interface CommunityJoin {
  community_id: CommunityId;
}


export interface CommunityJoinResponse {
  joined: boolean;
}


export interface CommunityModeratorView {
  community: Community;
  moderator: Person;
}


export interface CommunityResponse {
  community_view: CommunityView;
  discussion_languages: Array<LanguageId>;
}


export interface CommunityView {
  community: Community;
  subscribed: SubscribedType;
  blocked: boolean;
  counts: CommunityAggregates;
}


export interface CreateComment {
  content: string;
  post_id: PostId;
  parent_id?: CommentId;
  language_id?: LanguageId;
  form_id?: string;
  auth: string;
}


export interface CreateCommentLike {
  comment_id: CommentId;
  score: number;
  auth: string;
}


export interface CreateCommentReport {
  comment_id: CommentId;
  reason: string;
  auth: string;
}


export interface CreateCommunity {
  name: string;
  title: string;
  description?: string;
  icon?: string;
  banner?: string;
  nsfw?: boolean;
  posting_restricted_to_mods?: boolean;
  discussion_languages?: Array<LanguageId>;
  auth: string;
}


export interface CreateCustomEmoji {
  category: string;
  shortcode: string;
  image_url: string;
  alt_text: string;
  keywords: Array<string>;
  auth: string;
}


export interface CreatePost {
  name: string;
  community_id: CommunityId;
  url?: string;
  body?: string;
  honeypot?: string;
  nsfw?: boolean;
  language_id?: LanguageId;
  auth: string;
}


export interface CreatePostLike {
  post_id: PostId;
  score: number;
  auth: string;
}


export interface CreatePostReport {
  post_id: PostId;
  reason: string;
  auth: string;
}


export interface CreatePrivateMessage {
  content: string;
  recipient_id: PersonId;
  auth: string;
}


export interface CreatePrivateMessageReport {
  private_message_id: PrivateMessageId;
  reason: string;
  auth: string;
}


export interface CreateSite {
  name: string;
  sidebar?: string;
  description?: string;
  icon?: string;
  banner?: string;
  enable_downvotes?: boolean;
  enable_nsfw?: boolean;
  community_creation_admin_only?: boolean;
  require_email_verification?: boolean;
  application_question?: string;
  private_instance?: boolean;
  default_theme?: string;
  default_post_listing_type?: ListingType;
  legal_information?: string;
  application_email_admins?: boolean;
  hide_modlog_mod_names?: boolean;
  discussion_languages?: Array<LanguageId>;
  slur_filter_regex?: string;
  actor_name_max_length?: number;
  rate_limit_message?: number;
  rate_limit_message_per_second?: number;
  rate_limit_post?: number;
  rate_limit_post_per_second?: number;
  rate_limit_register?: number;
  rate_limit_register_per_second?: number;
  rate_limit_image?: number;
  rate_limit_image_per_second?: number;
  rate_limit_comment?: number;
  rate_limit_comment_per_second?: number;
  rate_limit_search?: number;
  rate_limit_search_per_second?: number;
  federation_enabled?: boolean;
  federation_debug?: boolean;
  captcha_enabled?: boolean;
  captcha_difficulty?: string;
  allowed_instances?: Array<string>;
  blocked_instances?: Array<string>;
  taglines?: Array<string>;
  registration_mode?: RegistrationMode;
  auth: string;
}


export interface CustomEmoji {
  id: CustomEmojiId;
  local_site_id: LocalSiteId;
  shortcode: string;
  image_url: string;
  alt_text: string;
  category: string;
  published: string;
  updated?: string;
}


export type CustomEmojiId = number;


export interface CustomEmojiKeyword {
  id: number;
  custom_emoji_id: CustomEmojiId;
  keyword: string;
}


export interface CustomEmojiResponse {
  custom_emoji: CustomEmojiView;
}


export interface CustomEmojiView {
  custom_emoji: CustomEmoji;
  keywords: Array<CustomEmojiKeyword>;
}


export interface DeleteAccount {
  password: string;
  auth: string;
}


export type DeleteAccountResponse = null;


export interface DeleteComment {
  comment_id: CommentId;
  deleted: boolean;
  auth: string;
}


export interface DeleteCommunity {
  community_id: CommunityId;
  deleted: boolean;
  auth: string;
}


export interface DeleteCustomEmoji {
  id: CustomEmojiId;
  auth: string;
}


export interface DeleteCustomEmojiResponse {
  id: CustomEmojiId;
  success: boolean;
}


export interface DeletePost {
  post_id: PostId;
  deleted: boolean;
  auth: string;
}


export interface DeletePrivateMessage {
  private_message_id: PrivateMessageId;
  deleted: boolean;
  auth: string;
}


export interface DistinguishComment {
  comment_id: CommentId;
  distinguished: boolean;
  auth: string;
}


export interface EditComment {
  comment_id: CommentId;
  content?: string;
  language_id?: LanguageId;
  form_id?: string;
  auth: string;
}


export interface EditCommunity {
  community_id: CommunityId;
  title?: string;
  description?: string;
  icon?: string;
  banner?: string;
  nsfw?: boolean;
  posting_restricted_to_mods?: boolean;
  discussion_languages?: Array<LanguageId>;
  auth: string;
}


export interface EditCustomEmoji {
  id: CustomEmojiId;
  category: string;
  image_url: string;
  alt_text: string;
  keywords: Array<string>;
  auth: string;
}


export interface EditPost {
  post_id: PostId;
  name?: string;
  url?: string;
  body?: string;
  nsfw?: boolean;
  language_id?: LanguageId;
  auth: string;
}


export interface EditPrivateMessage {
  private_message_id: PrivateMessageId;
  content: string;
  auth: string;
}


export interface EditSite {
  name?: string;
  sidebar?: string;
  description?: string;
  icon?: string;
  banner?: string;
  enable_downvotes?: boolean;
  enable_nsfw?: boolean;
  community_creation_admin_only?: boolean;
  require_email_verification?: boolean;
  application_question?: string;
  private_instance?: boolean;
  default_theme?: string;
  default_post_listing_type?: ListingType;
  legal_information?: string;
  application_email_admins?: boolean;
  hide_modlog_mod_names?: boolean;
  discussion_languages?: Array<LanguageId>;
  slur_filter_regex?: string;
  actor_name_max_length?: number;
  rate_limit_message?: number;
  rate_limit_message_per_second?: number;
  rate_limit_post?: number;
  rate_limit_post_per_second?: number;
  rate_limit_register?: number;
  rate_limit_register_per_second?: number;
  rate_limit_image?: number;
  rate_limit_image_per_second?: number;
  rate_limit_comment?: number;
  rate_limit_comment_per_second?: number;
  rate_limit_search?: number;
  rate_limit_search_per_second?: number;
  federation_enabled?: boolean;
  federation_debug?: boolean;
  captcha_enabled?: boolean;
  captcha_difficulty?: string;
  allowed_instances?: Array<string>;
  blocked_instances?: Array<string>;
  taglines?: Array<string>;
  registration_mode?: RegistrationMode;
  reports_email_admins?: boolean;
  auth: string;
}


export interface FeaturePost {
  post_id: PostId;
  featured: boolean;
  feature_type: PostFeatureType;
  auth: string;
}


export interface FederatedInstances {
  linked: Array<Instance>;
  allowed: Array<Instance>;
  blocked: Array<Instance>;
}


export interface FollowCommunity {
  community_id: CommunityId;
  follow: boolean;
  auth: string;
}


export interface GetBannedPersons {
  auth: string;
}


export interface GetCaptcha {
  auth?: string;
}


export interface GetCaptchaResponse {
  ok?: CaptchaResponse;
}


export interface GetComment {
  id: CommentId;
  auth?: string;
}


export interface GetComments {
  type_?: ListingType;
  sort?: CommentSortType;
  max_depth?: number;
  page?: number;
  limit?: number;
  community_id?: CommunityId;
  community_name?: string;
  post_id?: PostId;
  parent_id?: CommentId;
  saved_only?: boolean;
  auth?: string;
}


export interface GetCommentsResponse {
  comments: Array<CommentView>;
}


export interface GetCommunity {
  id?: CommunityId;
  name?: string;
  auth?: string;
}


export interface GetCommunityResponse {
  community_view: CommunityView;
  site?: Site;
  moderators: Array<CommunityModeratorView>;
  discussion_languages: Array<LanguageId>;
}


export interface GetFederatedInstances {
  auth?: string;
}


export interface GetFederatedInstancesResponse {
  federated_instances?: FederatedInstances;
}


export interface GetModlog {
  mod_person_id?: PersonId;
  community_id?: CommunityId;
  page?: number;
  limit?: number;
  type_?: ModlogActionType;
  other_person_id?: PersonId;
  auth?: string;
}


export interface GetModlogResponse {
  removed_posts: Array<ModRemovePostView>;
  locked_posts: Array<ModLockPostView>;
  featured_posts: Array<ModFeaturePostView>;
  removed_comments: Array<ModRemoveCommentView>;
  removed_communities: Array<ModRemoveCommunityView>;
  banned_from_community: Array<ModBanFromCommunityView>;
  banned: Array<ModBanView>;
  added_to_community: Array<ModAddCommunityView>;
  transferred_to_community: Array<ModTransferCommunityView>;
  added: Array<ModAddView>;
  admin_purged_persons: Array<AdminPurgePersonView>;
  admin_purged_communities: Array<AdminPurgeCommunityView>;
  admin_purged_posts: Array<AdminPurgePostView>;
  admin_purged_comments: Array<AdminPurgeCommentView>;
  hidden_communities: Array<ModHideCommunityView>;
}


export interface GetPersonDetails {
  person_id?: PersonId;
  username?: string;
  sort?: SortType;
  page?: number;
  limit?: number;
  community_id?: CommunityId;
  saved_only?: boolean;
  auth?: string;
}


export interface GetPersonDetailsResponse {
  person_view: PersonView;
  comments: Array<CommentView>;
  posts: Array<PostView>;
  moderates: Array<CommunityModeratorView>;
}


export interface GetPersonMentions {
  sort?: CommentSortType;
  page?: number;
  limit?: number;
  unread_only?: boolean;
  auth: string;
}


export interface GetPersonMentionsResponse {
  mentions: Array<PersonMentionView>;
}


export interface GetPost {
  id?: PostId;
  comment_id?: CommentId;
  auth?: string;
}


export interface GetPostResponse {
  post_view: PostView;
  community_view: CommunityView;
  moderators: Array<CommunityModeratorView>;
  cross_posts: Array<PostView>;
}


export interface GetPosts {
  type_?: ListingType;
  sort?: SortType;
  page?: number;
  limit?: number;
  community_id?: CommunityId;
  community_name?: string;
  saved_only?: boolean;
  moderator_view?: boolean;
  auth?: string;
}


export interface GetPostsResponse {
  posts: Array<PostView>;
}


export interface GetPrivateMessages {
  unread_only?: boolean;
  page?: number;
  limit?: number;
  auth: string;
}


export interface GetReplies {
  sort?: CommentSortType;
  page?: number;
  limit?: number;
  unread_only?: boolean;
  auth: string;
}


export interface GetRepliesResponse {
  replies: Array<CommentReplyView>;
}


export interface GetReportCount {
  community_id?: CommunityId;
  auth: string;
}


export interface GetReportCountResponse {
  community_id?: CommunityId;
  comment_reports: number;
  post_reports: number;
  private_message_reports?: number;
}


export interface GetSite {
  auth?: string;
}


export interface GetSiteMetadata {
  url: string;
}


export interface GetSiteMetadataResponse {
  metadata: SiteMetadata;
}


export interface GetSiteResponse {
  site_view: SiteView;
  admins: Array<PersonView>;
  version: string;
  my_user?: MyUserInfo;
  all_languages: Array<Language>;
  discussion_languages: Array<LanguageId>;
  taglines: Array<Tagline>;
  custom_emojis: Array<CustomEmojiView>;
}


export interface GetUnreadCount {
  auth: string;
}


export interface GetUnreadCountResponse {
  replies: number;
  mentions: number;
  private_messages: number;
}


export interface GetUnreadRegistrationApplicationCount {
  auth: string;
}


export interface GetUnreadRegistrationApplicationCountResponse {
  registration_applications: number;
}


export interface HideCommunity {
  community_id: CommunityId;
  hidden: boolean;
  reason?: string;
  auth: string;
}


export interface Instance {
  id: InstanceId;
  domain: string;
  published: string;
  updated?: string;
  software?: string;
  version?: string;
}


export type InstanceId = number;


export interface Language {
  id: LanguageId;
  code: string;
  name: string;
}


export type LanguageId = number;


export interface LeaveAdmin {
  auth: string;
}


export type LemmyErrorType =
  | { error_type: "ReportReasonRequired" }
  | { error_type: "ReportTooLong" }
  | { error_type: "NotAModerator" }
  | { error_type: "NotAnAdmin" }
  | { error_type: "CannotBlockYourself" }
  | { error_type: "CannotBlockAdmin" }
  | { error_type: "CouldNotUpdateUser" }
  | { error_type: "PasswordsDoNotMatch" }
  | { error_type: "PasswordIncorrect" }
  | { error_type: "EmailNotVerified" }
  | { error_type: "EmailRequired" }
  | { error_type: "CouldNotUpdateComment" }
  | { error_type: "CouldNotUpdatePrivateMessage" }
  | { error_type: "CannotLeaveAdmin" }
  | { error_type: "NoLinesInHtml" }
  | { error_type: "SiteMetadataPageIsNotDoctypeHtml" }
  | { error_type: "PictrsResponseError"; message: string }
  | { error_type: "PictrsPurgeResponseError"; message: string }
  | { error_type: "ImageUrlMissingPathSegments" }
  | { error_type: "ImageUrlMissingLastPathSegment" }
  | { error_type: "PictrsApiKeyNotProvided" }
  | { error_type: "NoContentTypeHeader" }
  | { error_type: "NotAnImageType" }
  | { error_type: "NotAModOrAdmin" }
  | { error_type: "NoAdmins" }
  | { error_type: "NotTopAdmin" }
  | { error_type: "NotTopMod" }
  | { error_type: "NotLoggedIn" }
  | { error_type: "SiteBan" }
  | { error_type: "Deleted" }
  | { error_type: "BannedFromCommunity" }
  | { error_type: "CouldNotFindCommunity" }
  | { error_type: "PersonIsBlocked" }
  | { error_type: "DownvotesAreDisabled" }
  | { error_type: "InstanceIsPrivate" }
  | { error_type: "InvalidPassword" }
  | { error_type: "SiteDescriptionLengthOverflow" }
  | { error_type: "HoneypotFailed" }
  | { error_type: "RegistrationApplicationIsPending" }
  | { error_type: "PrivateInstanceCannotHaveFederationEnabled" }
  | { error_type: "Locked" }
  | { error_type: "CouldNotCreateComment" }
  | { error_type: "MaxCommentDepthReached" }
  | { error_type: "EditCommentNotAllowed" }
  | { error_type: "OnlyAdminsCanCreateCommunities" }
  | { error_type: "CommunityAlreadyExists" }
  | { error_type: "LanguageNotAllowed" }
  | { error_type: "OnlyModsCanPostInCommunity" }
  | { error_type: "CouldNotUpdatePost" }
  | { error_type: "EditPostNotAllowed" }
  | { error_type: "CouldNotFindPost" }
  | { error_type: "EditPrivateMessageNotAllowed" }
  | { error_type: "SiteAlreadyExists" }
  | { error_type: "ApplicationQuestionRequired" }
  | { error_type: "InvalidDefaultPostListingType" }
  | { error_type: "RegistrationClosed" }
  | { error_type: "RegistrationApplicationAnswerRequired" }
  | { error_type: "EmailAlreadyExists" }
  | { error_type: "FederationError"; message: string }
  | { error_type: "FederationForbiddenByStrictAllowList" }
  | { error_type: "PersonIsBannedFromCommunity" }
  | { error_type: "ObjectIsNotPublic" }
  | { error_type: "InvalidCommunity" }
  | { error_type: "CannotCreatePostOrCommentInDeletedOrRemovedCommunity" }
  | { error_type: "CannotReceivePage" }
  | { error_type: "NewPostCannotBeLocked" }
  | { error_type: "OnlyLocalAdminCanRemoveCommunity" }
  | { error_type: "OnlyLocalAdminCanRestoreCommunity" }
  | { error_type: "NoIdGiven" }
  | { error_type: "CouldNotFindUsernameOrEmail" }
  | { error_type: "InvalidQuery" }
  | { error_type: "ObjectNotLocal" }
  | { error_type: "PostIsLocked" }
  | { error_type: "PersonIsBannedFromSite" }
  | { error_type: "InvalidVoteValue" }
  | { error_type: "PageDoesNotSpecifyCreator" }
  | { error_type: "PageDoesNotSpecifyGroup" }
  | { error_type: "NoCommunityFoundInCC" }
  | { error_type: "NoEmailSetup" }
  | { error_type: "EmailSmtpServerNeedsAPort" }
  | { error_type: "MissingAnEmail" }
  | { error_type: "RateLimitError" }
  | { error_type: "InvalidName" }
  | { error_type: "InvalidDisplayName" }
  | { error_type: "InvalidMatrixId" }
  | { error_type: "InvalidPostTitle" }
  | { error_type: "InvalidBodyField" }
  | { error_type: "BioLengthOverflow" }
  | { error_type: "MissingTotpToken" }
  | { error_type: "IncorrectTotpToken" }
  | { error_type: "CouldNotParseTotpSecret" }
  | { error_type: "CouldNotLikeComment" }
  | { error_type: "CouldNotSaveComment" }
  | { error_type: "CouldNotCreateReport" }
  | { error_type: "CouldNotResolveReport" }
  | { error_type: "CommunityModeratorAlreadyExists" }
  | { error_type: "CommunityUserIsAlreadyBanned" }
  | { error_type: "CommunityBlockAlreadyExists" }
  | { error_type: "CommunityFollowerAlreadyExists" }
  | { error_type: "CouldNotUpdateCommunityHiddenStatus" }
  | { error_type: "PersonBlockAlreadyExists" }
  | { error_type: "UserAlreadyExists" }
  | { error_type: "TokenNotFound" }
  | { error_type: "CouldNotLikePost" }
  | { error_type: "CouldNotSavePost" }
  | { error_type: "CouldNotMarkPostAsRead" }
  | { error_type: "CouldNotUpdateCommunity" }
  | { error_type: "CouldNotUpdateReplies" }
  | { error_type: "CouldNotUpdatePersonMentions" }
  | { error_type: "PostTitleTooLong" }
  | { error_type: "CouldNotCreatePost" }
  | { error_type: "CouldNotCreatePrivateMessage" }
  | { error_type: "CouldNotUpdatePrivate" }
  | { error_type: "SystemErrLogin" }
  | { error_type: "CouldNotSetAllRegistrationsAccepted" }
  | { error_type: "CouldNotSetAllEmailVerified" }
  | { error_type: "Banned" }
  | { error_type: "CouldNotGetComments" }
  | { error_type: "CouldNotGetPosts" }
  | { error_type: "InvalidUrl" }
  | { error_type: "EmailSendFailed" }
  | { error_type: "Slurs" }
  | { error_type: "CouldNotGenerateTotp" }
  | { error_type: "CouldNotFindObject" }
  | { error_type: "RegistrationDenied"; message: string }
  | { error_type: "FederationDisabled" }
  | { error_type: "DomainBlocked" }
  | { error_type: "DomainNotInAllowList" }
  | { error_type: "FederationDisabledByStrictAllowList" }
  | { error_type: "SiteNameRequired" }
  | { error_type: "SiteNameLengthOverflow" }
  | { error_type: "PermissiveRegex" }
  | { error_type: "InvalidRegex" }
  | { error_type: "CaptchaIncorrect" }
  | { error_type: "PasswordResetLimitReached" }
  | { error_type: "CouldNotCreateAudioCaptcha" };


export interface ListCommentReports {
  page?: number;
  limit?: number;
  unresolved_only?: boolean;
  community_id?: CommunityId;
  auth: string;
}


export interface ListCommentReportsResponse {
  comment_reports: Array<CommentReportView>;
}


export interface ListCommunities {
  type_?: ListingType;
  sort?: SortType;
  show_nsfw?: boolean;
  page?: number;
  limit?: number;
  auth?: string;
}


export interface ListCommunitiesResponse {
  communities: Array<CommunityView>;
}


export type ListingType = "All" | "Local" | "Subscribed";


export interface ListPostReports {
  page?: number;
  limit?: number;
  unresolved_only?: boolean;
  community_id?: CommunityId;
  auth: string;
}


export interface ListPostReportsResponse {
  post_reports: Array<PostReportView>;
}


export interface ListPrivateMessageReports {
  page?: number;
  limit?: number;
  unresolved_only?: boolean;
  auth: string;
}


export interface ListPrivateMessageReportsResponse {
  private_message_reports: Array<PrivateMessageReportView>;
}


export interface ListRegistrationApplications {
  unread_only?: boolean;
  page?: number;
  limit?: number;
  auth: string;
}


export interface ListRegistrationApplicationsResponse {
  registration_applications: Array<RegistrationApplicationView>;
}


export interface LocalSite {
  id: LocalSiteId;
  site_id: SiteId;
  site_setup: boolean;
  enable_downvotes: boolean;
  enable_nsfw: boolean;
  community_creation_admin_only: boolean;
  require_email_verification: boolean;
  application_question?: string;
  private_instance: boolean;
  default_theme: string;
  default_post_listing_type: ListingType;
  legal_information?: string;
  hide_modlog_mod_names: boolean;
  application_email_admins: boolean;
  slur_filter_regex?: string;
  actor_name_max_length: number;
  federation_enabled: boolean;
  captcha_enabled: boolean;
  captcha_difficulty: string;
  published: string;
  updated?: string;
  registration_mode: RegistrationMode;
  reports_email_admins: boolean;
}


export type LocalSiteId = number;


export interface LocalSiteRateLimit {
  id: number;
  local_site_id: LocalSiteId;
  message: number;
  message_per_second: number;
  post: number;
  post_per_second: number;
  register: number;
  register_per_second: number;
  image: number;
  image_per_second: number;
  comment: number;
  comment_per_second: number;
  search: number;
  search_per_second: number;
  published: string;
  updated?: string;
}


export interface LocalUser {
  id: LocalUserId;
  person_id: PersonId;
  email?: string;
  show_nsfw: boolean;
  blur_nsfw: boolean;
  auto_expand: boolean;
  theme: string;
  default_sort_type: SortType;
  default_listing_type: ListingType;
  interface_language: string;
  show_avatars: boolean;
  send_notifications_to_email: boolean;
  validator_time: string;
  show_scores: boolean;
  show_bot_accounts: boolean;
  show_read_posts: boolean;
  show_new_post_notifs: boolean;
  email_verified: boolean;
  accepted_application: boolean;
  totp_2fa_url?: string;
  open_links_in_new_tab: boolean;
}


export type LocalUserId = number;


export interface LocalUserView {
  local_user: LocalUser;
  person: Person;
  counts: PersonAggregates;
}


export interface LockPost {
  post_id: PostId;
  locked: boolean;
  auth: string;
}


export interface Login {
  username_or_email: string;
  password: string;
  totp_2fa_token?: string;
}


export interface LoginResponse {
  jwt?: string;
  registration_created: boolean;
  verify_email_sent: boolean;
}


export interface MarkAllAsRead {
  auth: string;
}


export interface MarkCommentReplyAsRead {
  comment_reply_id: CommentReplyId;
  read: boolean;
  auth: string;
}


export interface MarkPersonMentionAsRead {
  person_mention_id: PersonMentionId;
  read: boolean;
  auth: string;
}


export interface MarkPostAsRead {
  post_id: PostId;
  read: boolean;
  auth: string;
}


export interface MarkPrivateMessageAsRead {
  private_message_id: PrivateMessageId;
  read: boolean;
  auth: string;
}


export interface ModAdd {
  id: number;
  mod_person_id: PersonId;
  other_person_id: PersonId;
  removed: boolean;
  when_: string;
}


export interface ModAddCommunity {
  id: number;
  mod_person_id: PersonId;
  other_person_id: PersonId;
  community_id: CommunityId;
  removed: boolean;
  when_: string;
}


export interface ModAddCommunityView {
  mod_add_community: ModAddCommunity;
  moderator?: Person;
  community: Community;
  modded_person: Person;
}


export interface ModAddView {
  mod_add: ModAdd;
  moderator?: Person;
  modded_person: Person;
}


export interface ModBan {
  id: number;
  mod_person_id: PersonId;
  other_person_id: PersonId;
  reason?: string;
  banned: boolean;
  expires?: string;
  when_: string;
}


export interface ModBanFromCommunity {
  id: number;
  mod_person_id: PersonId;
  other_person_id: PersonId;
  community_id: CommunityId;
  reason?: string;
  banned: boolean;
  expires?: string;
  when_: string;
}


export interface ModBanFromCommunityView {
  mod_ban_from_community: ModBanFromCommunity;
  moderator?: Person;
  community: Community;
  banned_person: Person;
}


export interface ModBanView {
  mod_ban: ModBan;
  moderator?: Person;
  banned_person: Person;
}


export interface ModFeaturePost {
  id: number;
  mod_person_id: PersonId;
  post_id: PostId;
  featured: boolean;
  when_: string;
  is_featured_community: boolean;
}


export interface ModFeaturePostView {
  mod_feature_post: ModFeaturePost;
  moderator?: Person;
  post: Post;
  community: Community;
}


export interface ModHideCommunity {
  id: number;
  community_id: CommunityId;
  mod_person_id: PersonId;
  when_: string;
  reason?: string;
  hidden: boolean;
}


export interface ModHideCommunityView {
  mod_hide_community: ModHideCommunity;
  admin?: Person;
  community: Community;
}


export interface ModJoin {
  community_id: CommunityId;
}


export interface ModJoinResponse {
  joined: boolean;
}


export interface ModLockPost {
  id: number;
  mod_person_id: PersonId;
  post_id: PostId;
  locked: boolean;
  when_: string;
}


export interface ModLockPostView {
  mod_lock_post: ModLockPost;
  moderator?: Person;
  post: Post;
  community: Community;
}


export type ModlogActionType =
  | "All"
  | "ModRemovePost"
  | "ModLockPost"
  | "ModFeaturePost"
  | "ModRemoveComment"
  | "ModRemoveCommunity"
  | "ModBanFromCommunity"
  | "ModAddCommunity"
  | "ModTransferCommunity"
  | "ModAdd"
  | "ModBan"
  | "ModHideCommunity"
  | "AdminPurgePerson"
  | "AdminPurgeCommunity"
  | "AdminPurgePost"
  | "AdminPurgeComment";


export interface ModlogListParams {
  community_id?: CommunityId;
  mod_person_id?: PersonId;
  other_person_id?: PersonId;
  page?: number;
  limit?: number;
  hide_modlog_names: boolean;
}


export interface ModRemoveComment {
  id: number;
  mod_person_id: PersonId;
  comment_id: CommentId;
  reason?: string;
  removed: boolean;
  when_: string;
}


export interface ModRemoveCommentView {
  mod_remove_comment: ModRemoveComment;
  moderator?: Person;
  comment: Comment;
  commenter: Person;
  post: Post;
  community: Community;
}


export interface ModRemoveCommunity {
  id: number;
  mod_person_id: PersonId;
  community_id: CommunityId;
  reason?: string;
  removed: boolean;
  expires?: string;
  when_: string;
}


export interface ModRemoveCommunityView {
  mod_remove_community: ModRemoveCommunity;
  moderator?: Person;
  community: Community;
}


export interface ModRemovePost {
  id: number;
  mod_person_id: PersonId;
  post_id: PostId;
  reason?: string;
  removed: boolean;
  when_: string;
}


export interface ModRemovePostView {
  mod_remove_post: ModRemovePost;
  moderator?: Person;
  post: Post;
  community: Community;
}


export interface ModTransferCommunity {
  id: number;
  mod_person_id: PersonId;
  other_person_id: PersonId;
  community_id: CommunityId;
  when_: string;
}


export interface ModTransferCommunityView {
  mod_transfer_community: ModTransferCommunity;
  moderator?: Person;
  community: Community;
  modded_person: Person;
}


export interface MyUserInfo {
  local_user_view: LocalUserView;
  follows: Array<CommunityFollowerView>;
  moderates: Array<CommunityModeratorView>;
  community_blocks: Array<CommunityBlockView>;
  person_blocks: Array<PersonBlockView>;
  discussion_languages: Array<LanguageId>;
}


export const VERSION = "v3";

export interface UploadImage {
  image: File | Buffer;
  /**
   * Optional if cookie with jwt set is already present. Otherwise, auth is required.
   */
  auth?: string;
}

export interface UploadImageResponse {
  /**
   * Is "ok" if the upload was successful; is something else otherwise.
   */
  msg: string;
  files?: ImageFile[];
  url?: string;
  delete_url?: string;
}

export interface ImageFile {
  file: string;
  delete_token: string;
}


export interface PasswordChangeAfterReset {
  token: string;
  password: string;
  password_verify: string;
}


export interface PasswordReset {
  email: string;
}


export type PasswordResetResponse = null;


export interface Person {
  id: PersonId;
  name: string;
  display_name?: string;
  avatar?: string;
  banned: boolean;
  published: string;
  updated?: string;
  actor_id: string;
  bio?: string;
  local: boolean;
  banner?: string;
  deleted: boolean;
  inbox_url: string;
  matrix_user_id?: string;
  admin: boolean;
  bot_account: boolean;
  ban_expires?: string;
  instance_id: InstanceId;
}


export interface PersonAggregates {
  id: number;
  person_id: PersonId;
  post_count: number;
  post_score: number;
  comment_count: number;
  comment_score: number;
}


export type PersonBlockId = number;


export interface PersonBlockView {
  person: Person;
  target: Person;
}


export type PersonId = number;


export interface PersonMention {
  id: PersonMentionId;
  recipient_id: PersonId;
  comment_id: CommentId;
  read: boolean;
  published: string;
}


export type PersonMentionId = number;


export interface PersonMentionResponse {
  person_mention_view: PersonMentionView;
}


export interface PersonMentionView {
  person_mention: PersonMention;
  comment: Comment;
  creator: Person;
  post: Post;
  community: Community;
  recipient: Person;
  counts: CommentAggregates;
  creator_banned_from_community: boolean;
  subscribed: SubscribedType;
  saved: boolean;
  creator_blocked: boolean;
  my_vote?: number;
}


export interface PersonView {
  person: Person;
  counts: PersonAggregates;
}


export interface Post {
  id: PostId;
  name: string;
  url?: string;
  body?: string;
  creator_id: PersonId;
  community_id: CommunityId;
  removed: boolean;
  locked: boolean;
  published: string;
  updated?: string;
  deleted: boolean;
  nsfw: boolean;
  embed_title?: string;
  embed_description?: string;
  thumbnail_url?: string;
  ap_id: string;
  local: boolean;
  embed_video_url?: string;
  language_id: LanguageId;
  featured_community: boolean;
  featured_local: boolean;
}


export interface PostAggregates {
  id: number;
  post_id: PostId;
  comments: number;
  score: number;
  upvotes: number;
  downvotes: number;
  published: string;
  newest_comment_time_necro: string;
  newest_comment_time: string;
  featured_community: boolean;
  featured_local: boolean;
  hot_rank: number;
  hot_rank_active: number;
}


export type PostFeatureType = "Local" | "Community";


export type PostId = number;


export interface PostJoin {
  post_id: PostId;
}


export interface PostJoinResponse {
  joined: boolean;
}


export type PostOrCommentId = { Post: PostId } | { Comment: CommentId };


export interface PostReport {
  id: PostReportId;
  creator_id: PersonId;
  post_id: PostId;
  original_post_name: string;
  original_post_url?: string;
  original_post_body?: string;
  reason: string;
  resolved: boolean;
  resolver_id?: PersonId;
  published: string;
  updated?: string;
}


export type PostReportId = number;


export interface PostReportResponse {
  post_report_view: PostReportView;
}


export interface PostReportView {
  post_report: PostReport;
  post: Post;
  community: Community;
  creator: Person;
  post_creator: Person;
  creator_banned_from_community: boolean;
  my_vote?: number;
  counts: PostAggregates;
  resolver?: Person;
}


export interface PostResponse {
  post_view: PostView;
}


export interface PostView {
  post: Post;
  creator: Person;
  community: Community;
  creator_banned_from_community: boolean;
  counts: PostAggregates;
  subscribed: SubscribedType;
  saved: boolean;
  read: boolean;
  creator_blocked: boolean;
  my_vote?: number;
  unread_comments: number;
}


export interface PrivateMessage {
  id: PrivateMessageId;
  creator_id: PersonId;
  recipient_id: PersonId;
  content: string;
  deleted: boolean;
  read: boolean;
  published: string;
  updated?: string;
  ap_id: string;
  local: boolean;
}


export type PrivateMessageId = number;


export interface PrivateMessageReport {
  id: PrivateMessageReportId;
  creator_id: PersonId;
  private_message_id: PrivateMessageId;
  original_pm_text: string;
  reason: string;
  resolved: boolean;
  resolver_id?: PersonId;
  published: string;
  updated?: string;
}


export type PrivateMessageReportId = number;


export interface PrivateMessageReportResponse {
  private_message_report_view: PrivateMessageReportView;
}


export interface PrivateMessageReportView {
  private_message_report: PrivateMessageReport;
  private_message: PrivateMessage;
  private_message_creator: Person;
  creator: Person;
  resolver?: Person;
}


export interface PrivateMessageResponse {
  private_message_view: PrivateMessageView;
}


export interface PrivateMessagesResponse {
  private_messages: Array<PrivateMessageView>;
}


export interface PrivateMessageView {
  private_message: PrivateMessage;
  creator: Person;
  recipient: Person;
}


export interface PurgeComment {
  comment_id: CommentId;
  reason?: string;
  auth: string;
}


export interface PurgeCommunity {
  community_id: CommunityId;
  reason?: string;
  auth: string;
}


export interface PurgeItemResponse {
  success: boolean;
}


export interface PurgePerson {
  person_id: PersonId;
  reason?: string;
  auth: string;
}


export interface PurgePost {
  post_id: PostId;
  reason?: string;
  auth: string;
}


export interface Register {
  username: string;
  password: string;
  password_verify: string;
  show_nsfw: boolean;
  email?: string;
  captcha_uuid?: string;
  captcha_answer?: string;
  honeypot?: string;
  answer?: string;
}


export interface RegistrationApplication {
  id: number;
  local_user_id: LocalUserId;
  answer: string;
  admin_id?: PersonId;
  deny_reason?: string;
  published: string;
}


export interface RegistrationApplicationResponse {
  registration_application: RegistrationApplicationView;
}


export interface RegistrationApplicationView {
  registration_application: RegistrationApplication;
  creator_local_user: LocalUser;
  creator: Person;
  admin?: Person;
}


export type RegistrationMode = "Closed" | "RequireApplication" | "Open";


export interface RemoveComment {
  comment_id: CommentId;
  removed: boolean;
  reason?: string;
  auth: string;
}


export interface RemoveCommunity {
  community_id: CommunityId;
  removed: boolean;
  reason?: string;
  expires?: number;
  auth: string;
}


export interface RemovePost {
  post_id: PostId;
  removed: boolean;
  reason?: string;
  auth: string;
}


export interface ResolveCommentReport {
  report_id: CommentReportId;
  resolved: boolean;
  auth: string;
}


export interface ResolveObject {
  q: string;
  auth: string;
}


export interface ResolveObjectResponse {
  comment?: CommentView;
  post?: PostView;
  community?: CommunityView;
  person?: PersonView;
}


export interface ResolvePostReport {
  report_id: PostReportId;
  resolved: boolean;
  auth: string;
}


export interface ResolvePrivateMessageReport {
  report_id: PrivateMessageReportId;
  resolved: boolean;
  auth: string;
}


export interface SaveComment {
  comment_id: CommentId;
  save: boolean;
  auth: string;
}


export interface SavePost {
  post_id: PostId;
  save: boolean;
  auth: string;
}


export interface SaveUserSettings {
  show_nsfw?: boolean;
  blur_nsfw?: boolean;
  auto_expand?: boolean;
  show_scores?: boolean;
  theme?: string;
  default_sort_type?: SortType;
  default_listing_type?: ListingType;
  interface_language?: string;
  avatar?: string;
  banner?: string;
  display_name?: string;
  email?: string;
  bio?: string;
  matrix_user_id?: string;
  show_avatars?: boolean;
  send_notifications_to_email?: boolean;
  bot_account?: boolean;
  show_bot_accounts?: boolean;
  show_read_posts?: boolean;
  show_new_post_notifs?: boolean;
  discussion_languages?: Array<LanguageId>;
  generate_totp_2fa?: boolean;
  auth: string;
  open_links_in_new_tab?: boolean;
}


export interface Search {
  q: string;
  community_id?: CommunityId;
  community_name?: string;
  creator_id?: PersonId;
  type_?: SearchType;
  sort?: SortType;
  listing_type?: ListingType;
  page?: number;
  limit?: number;
  auth?: string;
}


export interface SearchResponse {
  type_: SearchType;
  comments: Array<CommentView>;
  posts: Array<PostView>;
  communities: Array<CommunityView>;
  users: Array<PersonView>;
}


export type SearchType =
  | "All"
  | "Comments"
  | "Posts"
  | "Communities"
  | "Users"
  | "Url";


export interface Site {
  id: SiteId;
  name: string;
  sidebar?: string;
  published: string;
  updated?: string;
  icon?: string;
  banner?: string;
  description?: string;
  actor_id: string;
  last_refreshed_at: string;
  inbox_url: string;
  private_key?: string;
  public_key: string;
  instance_id: InstanceId;
}


export interface SiteAggregates {
  id: number;
  site_id: SiteId;
  users: number;
  posts: number;
  comments: number;
  communities: number;
  users_active_day: number;
  users_active_week: number;
  users_active_month: number;
  users_active_half_year: number;
}


export type SiteId = number;


export interface SiteMetadata {
  title?: string;
  description?: string;
  image?: string;
  embed_video_url?: string;
}


export interface SiteResponse {
  site_view: SiteView;
  taglines: Array<Tagline>;
}


export interface SiteView {
  site: Site;
  local_site: LocalSite;
  local_site_rate_limit: LocalSiteRateLimit;
  counts: SiteAggregates;
}


export type SortType =
  | "Active"
  | "Hot"
  | "New"
  | "Old"
  | "TopDay"
  | "TopWeek"
  | "TopMonth"
  | "TopYear"
  | "TopAll"
  | "MostComments"
  | "NewComments"
  | "TopHour"
  | "TopSixHour"
  | "TopTwelveHour"
  | "TopThreeMonths"
  | "TopSixMonths"
  | "TopNineMonths";


export type SubscribedType = "Subscribed" | "NotSubscribed" | "Pending";


export interface Tagline {
  id: number;
  local_site_id: LocalSiteId;
  content: string;
  published: string;
  updated?: string;
}


export interface TransferCommunity {
  community_id: CommunityId;
  person_id: PersonId;
  auth: string;
}


export interface UserJoin {
  auth: string;
}


export interface UserJoinResponse {
  joined: boolean;
}


export interface VerifyEmail {
  token: string;
}


export type VerifyEmailResponse = null;
