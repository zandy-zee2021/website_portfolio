from flask import Flask, request, render_template
from flask_mail import Mail, Message

app = Flask(__name__)

# Configure Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'your-email@gmail.com'
app.config['MAIL_PASSWORD'] = 'your-password'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail(app)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        msg = Message('Hello', sender='your-email@gmail.com', recipients=['zbuthelezi023@student.wethinkcode.co.za'])
        msg.body = f"From: {request.form['email']}\n\n{request.form['message']}"
        mail.send(msg)
        return 'Form submitted.'
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)