# Description

Target audience: developers and tech savvy people looking for a secure, transparent, and easy to use platform to keep their notes, passwords, and any form of text secure and non-dependent on an internet connection at any given time.

A website/app that will allow users to write down or upload files with a secure, back-tested, and a unique way to access them via QR code and a personal password to unlock it.

As a developer, I want to be able to keep notes, passwords, and important files safe and have unique access to them even when I do not have an internet connection, so I don't have to rely on pseudo safe environments that only encrypt small amounts of data, that are server-dependent, to which I am locked out in case I have no internet connection of any kind.


# Provisory name: SecNote
# Objectives
  * Practice
  * Show the market that we are able to build some awesomeness
  * Build a really cool app the developers really need
  * Have fun 
  * Make some money
  * Get rich
  * Get famous
# Payment system
  * https://stripe.com/en-br
    - aws sqs
  * automatic invoicing
  
  * free up to 100 notes
  * after 1k usd lifetime access with premium features

# Technologies
  ## Frontend
    * https://expo.dev/
    * react native app to decrypt
    * react web
  ## Backend
    * terraform
    * typescript
    * lambda
    * dynamodb
    * graphql - apollo-server
  ## DevOps / Tooling ???
    * github
    * jira/bitbucket
    * gitlab
    * azure devops  
# Features

  # Basics
    * encrypt and decrypt 
    * qr code generation
    * end of the world backup app: a small self content html-page/ wich can decrypt, must fit in a qr-code

  # Real time cloud security
    * Dropbox-like app to upload documents from a specific folder

  # WhatsApp Biz Account
    * WhatsApp account o receive messages to encrypt

  # Excel integration
   * VBA Code to encrypt and decrypt data

  # Node Package

  # Python Package

  # Notifications/Emails
    * you will receive an email for each note created, updated ( with the html/js code do decrypt it if you need )
    * option to receive a whatsapp message 
    * option to receive sms message

# Premium features
  * rest api to encrypt and decrypt data

# Marketing
  https://doodle.com/en/

# Plannings
  1. Break down the stories
  2. Size them with planning poker
  3. Road map
  4. Execution
  5. Maintenance

# Market research
 - Ask my old client / customer if that software would fit theirs needs
 - Ask friends

# People
 - Backend (Fernando, Ian)
 - Frontend (Fernando, Ian)
 - Ui Ux (???)
 - Css guy (???)


# Sprints - 1 month each

  # Zero sprints
    - Write the story down
    - Planning poker them
    - Grom them
    - Write the DoR, DoD
    - Make a schedule (planning, retro, review)

  # First
    express-generator ejs app
    form 1: receive data, and password from a html post and reply the encrypted text
    form 2: receive encrypted data and password and return decrypted text
    no css
    no react
    no storage
    no devops

    deploy to heroku from command line

    the most common and bigger error that teams do is to not go directy into the point we build the car with the car running

  # Second 
    login, sign up, logout, recover password, facebook login, google login, 2FA ( Amazon Cognito )
  # Third
    terraform deploying from command line
    no devops yet
    integrate login with express js app
  # Fourth
    storage in dynamodb
    limit to up to 100 notes (keep in mind to not have the 100 limit harded coded in codebase)
  # Fifth
    html page/js with data decryption
    send email with encrypted data and the html/js page
  # Sixth
    Css

  # MVP MVP MVP

  # Seventh

  # Eighth

  # Nineth

  # Tenth

