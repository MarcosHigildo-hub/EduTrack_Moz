from flask import Flask
from flask_cors import CORS
from config import Config
from extensions import db, migrate
from models import Role, Utilizador
from routes.auth_routes import auth_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    # CORS para o frontend
    CORS(app, resources={r"/api/*": {"origins": "*"}})

    db.init_app(app)
    migrate.init_app(app, db)

    app.register_blueprint(auth_bp, url_prefix='/auth')

    @app.route('/health')
    def health():
        return {'status': 'ok'}


    return app

if __name__ == '__main__':
    create_app().run(debug=True)
