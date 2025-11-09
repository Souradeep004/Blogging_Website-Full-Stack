# Full-Stack Blogging Website

A complete full-stack blogging platform with user authentication, CRUD operations, and a modern responsive UI.

## 🚀 Features

- ✅ User Authentication (Register/Login with JWT)
- ✅ Create, Read, Update, Delete Posts
- ✅ Search and Filter Posts by Category
- ✅ Responsive Design
- ✅ Protected Routes
- ✅ RESTful API
- ✅ MongoDB Database
- ✅ Password Hashing with bcrypt

## 📁 File Structure

```
my-blog/
├── backend/
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── Post.js
│   │   └── User.js
│   ├── routes/
│   │   ├── posts.js
│   │   └── users.js
│   ├── middleware/
│   │   └── auth.js
│   ├── controllers/
│   │   ├── postController.js
│   │   └── userController.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── index.html
│   ├── post.html
│   ├── create.html
│   ├── login.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── main.js
│       ├── api.js
│       └── auth.js
└── README.md
```

## 🛠️ Tech Stack

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs

**Frontend:**
- HTML5
- CSS3
- Vanilla JavaScript
- Fetch API

## 📋 Prerequisites

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (or use MongoDB Atlas)
- A code editor (VS Code recommended)

## 🔧 Installation & Setup

### Step 1: Clone/Download the Project

Create a folder called `my-blog` and organize files according to the structure above.

### Step 2: Install MongoDB

**Option A: Local MongoDB**
1. Download and install MongoDB Community Server
2. Start MongoDB service:
   ```bash
   # Windows
   net start MongoDB
   
   # macOS/Linux
   sudo systemctl start mongod
   ```

**Option B: MongoDB Atlas (Cloud)**
1. Create free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get your connection string
4. Update `.env` file with your connection string

### Step 3: Setup Backend

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file
# Copy the contents from backend/.env file provided

# Start the server
npm start

# Or use nodemon for development
npm run dev
```

The server should start on `http://localhost:5000`

### Step 4: Setup Frontend

```bash
# Navigate to frontend folder
cd frontend

# Option 1: Open directly in browser
# Simply double-click index.html

# Option 2: Use Live Server (recommended)
# Install VS Code extension "Live Server"
# Right-click on index.html and select "Open with Live Server"

# Option 3: Use Python HTTP server
python -m http.server 8000
# Then visit http://localhost:8000
```

## 📦 Backend Dependencies

Install these in the `backend` folder:

```bash
npm install express mongoose dotenv cors bcryptjs jsonwebtoken
npm install --save-dev nodemon
```

## 🔐 Environment Variables

Create a `.env` file in the `backend` folder:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/myblog
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production_12345
```

**Important:** Change `JWT_SECRET` to a random secure string in production!

## 🎯 API Endpoints

### Posts
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create post (Auth required)
- `PUT /api/posts/:id` - Update post (Auth required)
- `DELETE /api/posts/:id` - Delete post (Auth required)
- `GET /api/posts/search?q=query` - Search posts

### Users
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user
- `GET /api/users/profile` - Get user profile (Auth required)
- `PUT /api/users/profile` - Update profile (Auth required)

## 🚦 Testing the Application

### 1. Start Backend Server
```bash
cd backend
npm start
```
You should see:
```
Server running on port 5000
MongoDB Connected: localhost
```

### 2. Open Frontend
Open `frontend/index.html` in your browser

### 3. Register a New User
1. Click "Login" in navigation
2. Click "Register here"
3. Fill in the form and submit

### 4. Create a Post
1. After login, click "Create Post"
2. Fill in post details
3. Click "Publish Post"

### 5. View Posts
- Go to homepage to see all posts
- Click on any post to view details
- Use search and category filters

## 🐛 Troubleshooting

### MongoDB Connection Error
```
Error: connect ECONNREFUSED
```
**Solution:** Make sure MongoDB service is running

### CORS Error
```
Access to fetch at 'http://localhost:5000' has been blocked by CORS policy
```
**Solution:** Make sure `cors` is installed and configured in `server.js`

### Cannot POST /api/posts
**Solution:** Check if you're logged in and token is being sent in headers

### Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::5000
```
**Solution:** 
```bash
# Kill the process using port 5000
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:5000 | xargs kill -9
```

## 📱 Usage Guide

### For Users:
1. **Register/Login** - Create an account to start blogging
2. **Browse Posts** - View all posts on the homepage
3. **Search** - Use the search bar to find specific posts
4. **Filter** - Click category buttons to filter posts
5. **Create Post** - Click "Create Post" to write new articles
6. **Read Posts** - Click any post card to read full content

### For Developers:
- Backend API is RESTful and can be used with any frontend
- JWT tokens expire after 30 days
- All passwords are hashed using bcrypt
- MongoDB indexes are set up for text search

## 🔒 Security Features

- ✅ Password hashing with bcrypt
- ✅ JWT-based authentication
- ✅ Protected API routes
- ✅ Input validation
- ✅ CORS enabled
- ✅ Environment variables for sensitive data

## 🎨 Customization

### Change Colors
Edit `frontend/css/style.css`:
```css
/* Primary gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Change to your colors */
background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
```

### Add Categories
Edit `backend/models/Post.js`:
```javascript
category: {
    enum: ['Technology', 'Lifestyle', 'Travel', 'Food', 'Business', 'YourNewCategory']
}
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and submit pull requests!

## 📞 Support

If you encounter any issues:
1. Check the Troubleshooting section
2. Verify all dependencies are installed
3. Ensure MongoDB is running
4. Check console for error messages

## 🎉 Next Steps

- Add image upload functionality
- Implement comments system
- Add social media sharing
- Create admin dashboard
- Add email notifications
- Implement rich text editor

---

Happy Blogging! 🎊
