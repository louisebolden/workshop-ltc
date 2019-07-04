# Configure AWS as a provider of cloud services
provider "aws" {
  profile = "default" # refers to your [default] profile in ./.aws/credentials
  region = "eu-west-1"
}

# Create a private bucket in S3
resource "aws_s3_bucket" "b" {
  bucket = "my-tf-test-bucket" # bucket key
  acl = "private" # the bucket cannot be accessed by anyone else

  tags = {
    Name = "My test bucket" # (optional) add any tags you like
  }
}
