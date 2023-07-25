import "../styles.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dropzone Amazon S3 Setup Guide",
};

export default function Page() {
  return (
    <div className="w-10/12 md:w-10/12">
      <div id="wrapper">
        <div id="header-row">
          <div id="header-left">
            <div id="header-left-content">
              <h1 className="clarify-article-title">
                Dropzone Amazon S3 Setup Guide
              </h1>
            </div>
          </div>
        </div>
        <div id="clarify-article-content">
          <div className="clarify-article-description">
            <p>
              This guide will walk you through the process of setting up an AWS
              account, creating an S3 bucket with an IAM user and configuring
              Dropzone to upload to this bucket.
            </p>
            <p>
              The first step to getting Amazon S3 working with Dropzone is to
              create an Amazon Web Services (AWS) account. An AWS account allows
              you to use many different cloud services that Amazon provides
              including S3 storage. If you already have an AWS account setup and
              a bucket you would like to upload to, you can skip down to{" "}
              <a href="#dropzone-setup" className="underline">
                setting it up in Dropzone.
              </a>
            </p>
          </div>{" "}
          <div className="rule">
            <img src="/rule.png" alt="" />
          </div>{" "}
          <div className="clarify-steps-container">
            {" "}
            <div id="clarify-step-10" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                Create an Amazon AWS Account
              </h2>{" "}
              <div className="clarify-step-instructions">
                <p>
                  To create an AWS account, visit{" "}
                  <a href="http://aws.amazon.com">http://aws.amazon.com</a> and
                  click the 'Create an AWS Account' button.
                </p>
              </div>
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/create-an-amazon-aws-account.png"
                    width={1185}
                    height={801}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-11" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                Choose an AWS Email address, password and account name
              </h2>{" "}
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/choose-an-aws-email-address--password-and-account-name.png"
                    width={1175}
                    height={801}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-12" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                Enter contact info and choose the 'Personal' account type
              </h2>{" "}
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/enter-contact-info-and-choose-the--personal--account-type.png"
                    width={1164}
                    height={1041}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-13" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                Enter payment information
              </h2>{" "}
              <div className="clarify-step-instructions">
                <p>
                  You will need to provide credit card info in order to create
                  an AWS account. New AWS customers get 5GB of free storage and
                  15GB of Data Transfer each month for one year.{" "}
                </p>
                <p>
                  For more details, see the full Amazon S3 pricing information
                  at &nbsp;
                  <a href="https://aws.amazon.com/s3/pricing/">
                    https://aws.amazon.com/s3/pricing
                  </a>
                </p>
              </div>
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/enter-payment-information.png"
                    width={1163}
                    height={904}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-15" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">Verify your account</h2>{" "}
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/verify-your-account.png"
                    width={1163}
                    height={904}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-16" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                Choose the 'Free' support plan
              </h2>{" "}
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/choose-the--free--support-plan.png"
                    width={1163}
                    height={904}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-17" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                Sign into the AWS Console
              </h2>{" "}
              <div className="clarify-step-instructions">
                <p>
                  After creating your acccount, sign in with your new account
                  details at{" "}
                  <a href="https://signin.aws.amazon.com/">
                    https://signin.aws.amazon.com
                  </a>
                </p>
              </div>
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/sign-into-the-aws-console.png"
                    width={1163}
                    height={904}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-20" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                Click on the 'Services' menu
              </h2>{" "}
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/click-on-the--services--menu.png"
                    width={1163}
                    height={904}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-22" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                Choose 'S3' from the list of available AWS services
              </h2>{" "}
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/choose--s3--from-the-list-of-available-aws-services.png"
                    width={1163}
                    height={904}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-23" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                Create a new Amazon S3 bucket
              </h2>{" "}
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/create-a-new-amazon-s3-bucket.png"
                    width={1163}
                    height={904}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-25" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                Enter a name for your bucket. This name must be unique
              </h2>{" "}
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/enter-a-name-for-your-bucket-this-name-must-be-unique.png"
                    width={1163}
                    height={904}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-26" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                Choose the 'US East (N. Virginia)' region and then click the
                'Next' button
              </h2>{" "}
              <div className="clarify-step-instructions">
                <p>
                  Note: You can use Dropzone's Amazon S3 integration with S3
                  buckets in other regions - If you do this then you will need
                  to change the 'Server' URL field based on the regional
                  endpoints provided by Amazon here:{" "}
                  <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region">
                    https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region
                  </a>{" "}
                </p>
                <p>
                  If you choose the 'US East (N. Virginia)' region as shown
                  below then the default Server URL in Dropzone
                  (s3.amazonaws.com) will work.
                </p>
              </div>
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/choose-the--us-east--n-virginia---region-and-then-click-the--next--button.png"
                    width={1163}
                    height={904}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-27" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                No special bucket properties are required so you can just click
                'Next' on the below screen
              </h2>{" "}
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/no-special-bucket-properties-are-required-so-you-can-just-click--next--on-the-below-screen.png"
                    width={1163}
                    height={904}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-29" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                Untick the 'Block all Public access' checkbox so that Dropzone
                can make uploaded files available at a public URL after upload
                and then click 'Next'
              </h2>{" "}
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/untick-the--block-all-public-access--checkbox-so-that-dropzone-can-make-uploaded-files-available-at-.png"
                    width={1163}
                    height={904}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-30" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                Click the 'Create bucket' button
              </h2>{" "}
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/click-the--create-bucket--button.png"
                    width={1163}
                    height={904}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-31" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                Click on the 'Services' menu
              </h2>{" "}
              <div className="clarify-step-instructions">
                <p>
                  You now need to create a user account (called an IAM user)
                  that will give Dropzone access to upload to the bucket you
                  just created. The below steps will guide you through how to do
                  this.
                </p>
              </div>
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/click-on-the--services--menu-1.png"
                    width={1163}
                    height={904}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-21" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                Choose 'IAM' from the list of available AWS services
              </h2>{" "}
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/choose--iam--from-the-list-of-available-aws-services.png"
                    width={1163}
                    height={904}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-33" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                Click on the 'Users: 0' link
              </h2>{" "}
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/click-on-the--users--0--link.png"
                    width={1163}
                    height={904}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-34" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                Click the 'Add user' button
              </h2>{" "}
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/click-the--add-user--button.png"
                    width={1163}
                    height={904}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-36" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                Enter a username for the user and tick the 'Programmatic access'
                checkbox. Then click the 'Next: Permissions' button
              </h2>{" "}
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/enter-a-username-for-the-user-and-tick-the--programmatic-access--checkbox-then-click-the--next--perm.png"
                    width={1163}
                    height={904}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-37" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                Click 'Attach existing policies directly'
              </h2>{" "}
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/click--attach-existing-policies-directly-.png"
                    width={1163}
                    height={904}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-38" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                In the search box, find a policy called 'AmazonS3FullAccess' and
                check the box beside it, then click the 'Next: Tags' button
              </h2>{" "}
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/in-the-search-box--find-a-policy-called--amazons3fullaccess--and-check-the-box-beside-it--then-click.png"
                    width={1163}
                    height={904}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-39" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                No tags are required so click the 'Next: Review' button
              </h2>{" "}
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/no-tags-are-required-so-click-the--next--review--button.png"
                    width={1163}
                    height={904}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-40" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                Click the 'Create user' button to finish creating the user
              </h2>{" "}
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/click-the--create-user--button-to-finish-creating-the-user.png"
                    width={1163}
                    height={904}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-41" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                You will now be given the 'Access key ID' and 'Secret access
                key' for the newly created user. You can only see the secret
                access key once, so download the CSV as recommended or make a
                note of these.
              </h2>{" "}
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/you-will-now-be-given-the--access-key-id--and--secret-access-key--for-the-newly-created-user-you-can.png"
                    width={1163}
                    height={904}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="dropzone-setup" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                Setup the Amazon S3 action in Dropzone
              </h2>{" "}
              <div className="clarify-step-instructions">
                <p>
                  You now have all the required information to setup the Amazon
                  S3 action in Dropzone.{" "}
                </p>
                <p>
                  To do this, first open the Dropzone grid by clicking on the
                  menu item, then click the plus icon in the top left of the
                  grid. Then choose the Amazon S3 action from the list.
                </p>
              </div>
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/setup-the-amazon-s3-action-in-dropzone.png"
                    width={599}
                    height={596}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-47" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                Enter the Access Key ID, Secret access key and bucket name that
                you got from the earlier steps in the configuration dialog that
                appears. Then click the 'Add' button to add the new action to
                your Dropzone grid
              </h2>{" "}
              <div className="clarify-step-instructions">
                <p>
                  Note: The server and 'Root URL' fields will be filled out for
                  you. You can leave the 'Folder' field blank. It's also
                  recommended that you click the 'Test Connection' button to
                  verify everything is configured correctly.
                </p>
              </div>
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/enter-the-access-key-id--secret-access-key-and-bucket-name-that-you-got-from-the-earlier-steps-in-th.png"
                    width={686}
                    height={686}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-48" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                Setup is now complete. You can now upload files to your Amazon
                bucket by dragging them onto the Dropzone icon which will appear
                at the top of the screen
              </h2>{" "}
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/setup-is-now-complete-you-can-now-upload-files-to-your-amazon-bucket-by-dragging-them-onto-the-dropz.png"
                    width={599}
                    height={596}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-50" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                Drop the file(s) for upload onto the Amazon S3 action in the
                grid to begin uploading
              </h2>{" "}
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/drop-the-file-s--for-upload-onto-the-amazon-s3-action-in-the-grid-to-begin-uploading.png"
                    width={603}
                    height={554}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-51" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                When upload is complete, Dropzone will show a notification and
                the URLs of the uploaded files will be copied onto the clipboard
              </h2>{" "}
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/when-upload-is-complete--dropzone-will-show-a-notification-and-the-urls-of-the-uploaded-files-will-b.png"
                    width={541}
                    height={351}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
            <div className="rule">
              <img src="/rule.png" alt="" />
            </div>{" "}
            <div id="clarify-step-52" className="clarify-step-container">
              {" "}
              <h2 className="clarify-step-title">
                You can now paste the URL(s) of your uploaded files into another
                application
              </h2>{" "}
              <div className="clarify-step-image-wrapper">
                <div className="clarify-step-image-container">
                  <img
                    src="/help/dropzone-amazon-s3-setup-guide/you-can-now-paste-the-url-s--of-your-uploaded-files-into-another-application.png"
                    width={1151}
                    height={716}
                    className="clarify-step-image"
                    alt=""
                  />
                </div>
              </div>{" "}
            </div>{" "}
            <div className="clarify-clear" />{" "}
          </div>{" "}
        </div>
        <div className="rule">
          <img src="/rule.png" alt="" />
        </div>
        <div className="footer">
          <p />
        </div>
      </div>
    </div>
  );
}
