# Learning to Code vs Coding at Work

## Demo/Example 7: Web Services

If you want to try this example code, you'll need an AWS account. **Please note that, while the following example should not incur any costs if your account is eligible to use the [AWS free tier](https://aws.amazon.com/free/), there is a chance of incuring some small cost, especially if you do not destroy the S3 bucket once you've checked that it was created successfully. Do not proceed if you don't want to run the risk of even £0.01 of cost.**

Head over to [the AWS site](https://aws.amazon.com) if you'd like to register an account and try out the example code below. You'll need some access credentials, so head straight to [the AWS IAM service page](https://console.aws.amazon.com/iam/home#/users) to create a user. To start with, it's easiest to give this user full permissions - but **make sure to destroy this user once you're finished with the example below**. Later, you can create a new user with only the permissions required, which is a little more fiddly but less risky.

```
# ./.aws/credentials

[default]
aws_access_key_id = abc123
aws_secret_access_key - 123abc
```

You'll also need to install Terraform, if you haven't already. The example code below will work with [version 0.11.14](https://releases.hashicorp.com/terraform/0.11.14/).

If you download the correct file for your machine from that link, you can unzip and move the binary into a directory that is included in your system's $PATH. (Run `$PATH` to see wheat that is.)

Verify that you've got Terraform installed correctly by opening a fresh Terminal tab or window, navigating to this `./example-7` directory and running `terraform -v`.

Now you're ready to:

1. Take a look at `example.tf` here and follow the comments
2. Run `terraform init` to install the AWS plugin, and `terraform plan` to see what changes would be made by the code in `example.tf`
3. Run `terraform apply` **(if you've read and understood all of the bold text on this page)** to execute the instructions in `example.tf` - notice the new `terraform.tfstate` file that is output by this command (this file allows you to share information about the current infrastructure state with teammates)
4. Login to your AWS account and check the [S3 dashboard](https://s3.console.aws.amazon.com/s3/home) to see your created bucket
5. Review the AWS [free plan offerings](https://aws.amazon.com/free/) and the [Terraform AWS documentation](https://www.terraform.io/docs/providers/aws/) to set up another service in AWS, such as a Lambda ('serverless') function and/or a natural language processing experiment with Comprehend
