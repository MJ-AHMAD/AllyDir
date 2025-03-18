import smtplib
import csv
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# SMTP কনফিগারেশন লোড করুন
smtp_config = {
    "host": "smtp.gmail.com",
    "port": 587,
    "username": "quranerfariwala@gmail.com",
    "password": "@Ahmad2025#",
    "from_email": "quranerfariwala@gmail.com"
}

# ইমেইল পাঠানোর ফাংশন
def send_email(to_email, subject, html_content):
    try:
        server = smtplib.SMTP(smtp_config["host"], smtp_config["port"])
        server.starttls()
        server.login(smtp_config["username"], smtp_config["password"])
        
        msg = MIMEMultipart()
        msg['From'] = smtp_config["from_email"]
        msg['To'] = to_email
        msg['Subject'] = subject
        
        msg.attach(MIMEText(html_content, 'html'))
        
        server.sendmail(smtp_config["from_email"], to_email, msg.as_string())
        server.quit()
        print(f"Successfully sent to {to_email}")
    except Exception as e:
        print(f"Failed to send email to {to_email}. Error: {str(e)}")

# টার্গেট ইমেইল লোড করা
with open('../audience/subscribers.csv', 'r') as file:
    reader = csv.DictReader(file)
    for row in reader:
        html_content = open('../assets/templates/donation_email.html').read()
        send_email(row['Email'], "Your Support Can Help Me Regain My Health", html_content)
