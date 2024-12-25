"""Application configuration."""
from pathlib import Path

# Base directory of the application
BASE_DIR = Path(__file__).parent

# Static files configuration
STATIC_DIR = BASE_DIR / 'static'
FILES_DIR = STATIC_DIR / 'files'
VIDEOS_DIR = STATIC_DIR / 'videos'

# Ensure directories exist
FILES_DIR.mkdir(parents=True, exist_ok=True)
VIDEOS_DIR.mkdir(parents=True, exist_ok=True)