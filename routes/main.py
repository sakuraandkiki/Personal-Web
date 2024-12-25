"""Main route handlers."""
from flask import Blueprint, render_template, jsonify
from models.projects import PROJECTS
from forms import ContactForm

main = Blueprint('main', __name__)

@main.route('/')
def home():
    """Render the home page."""
    form = ContactForm()  # 创建表单实例
    return render_template('index.html', projects=PROJECTS, form=form)

@main.route('/contact', methods=['POST'])
def contact():
    form = ContactForm()
    if form.validate_on_submit():
        # 处理表单提交
        return jsonify({'status': 'success'})
    return jsonify({'errors': form.errors}), 400