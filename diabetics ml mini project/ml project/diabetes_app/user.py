# user.py
from flask_login import UserMixin

class User(UserMixin):
    def __init__(self, id, username, password):
        self.id = id
        self.username = username
        self.password = password

# This is just an example. In a real application, you should hash passwords and store them securely.
users = {
    'testuser': User(id=1, username='testuser', password='password')
}

def get_user(username):
    return users.get(username)
