"""Project route handlers."""
from flask import Blueprint, render_template, send_file
from models.projects import PROJECTS
from config import FILES_DIR

projects = Blueprint('projects', __name__)

@projects.route('/project/<int:project_id>')
def project(project_id):
    project = PROJECTS.get(project_id)
    if project is None:
        return 'Project not found', 404
    return render_template('project.html', project=project)

@projects.route('/files/<path:filename>')
def download_file(filename):
    try:
        return send_file(
            FILES_DIR / filename,
            as_attachment=True
        )
    except FileNotFoundError:
        return 'File not found', 404