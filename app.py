"""Main application entry point."""
from flask import Flask
from routes.projects import projects
from routes.main import main
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = os.urandom(24)

# 注册蓝图
app.register_blueprint(main, url_prefix='/')
app.register_blueprint(projects, url_prefix='/projects')

if __name__ == '__main__':
    app.run(debug=True)