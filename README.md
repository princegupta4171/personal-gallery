# Project Setup

## Backend Setup

1. Navigate to Backend folder:
```bash
cd Backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with:
```
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
MONGO_URI=your_mongodb_connection_string
```

4. Start server:
```bash
npm start
```

## Frontend Setup

1. Navigate to Frontend folder:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with:
```
VITE_API_URL=http://localhost:3000
```

4. Start development server:
```bash
npm run dev
```

## Environment Variables

### Backend (.env)
- `IMAGEKIT_PRIVATE_KEY` - ImageKit private key for file uploads
- `MONGO_URI` - MongoDB connection string

### Frontend (.env)
- `VITE_API_URL` - Backend API URL

## Notes
- Never commit `.env` files to Git
- Use `.env.example` as template for environment variables
