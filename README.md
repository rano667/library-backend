# node - Library Management Project

## Try the api's

- https://my-library-tmfh.onrender.com

**Note:** Ensure that you have an active internet connection.

## Instructions to Run the App Locally

### Prerequisites:

- Git
- Node.js and npm should be installed.

### Summary:

1. Clone the repository.
2. Install project dependencies.
3. Start the server locally.

open command prompt then run the following commands.


- git clone https://github.com/rano667/library-backend.git
- cd library-backend
- npm i
- npm start

in your browser visit the url http://localhost:4000

Hello, Books -- will be seen on the web browser. That means the server is running fine.

### Step 1: Clone the Project

If you have Git installed, follow these steps:

1. Create a new folder on your desktop.
2. Open the folder.
3. Open a terminal (Git Bash, Command Prompt, or Terminal) inside the folder.
4. Run the following command:

```bash
git clone https://github.com/rano667/library-backend.git

### Step 2: Install Dependencies and Run the server

1. Navigate to the project folder (library-backend):

```cmd
cd library-backend

2. Install project dependencies:

```cmd
- npm i

3. Start the server:

```cmd
npm start

in your browser visit the url http://localhost:4000


# Database 
The application uses a MongoDB Atlas cluster, which is hosted in the cloud, so no additional configuration is needed.

However, if you want to run the database locally, you can download MongoDB Compass and update the MongoDB URI in the backend/connectDB.js file. Modify the databaseURI variable like this:

const databaseURI = 'mongodb://localhost:27017/your_database_name_here';


### Api Collection: All the useful api's are given below

1. root:
```endpoint
GET: /

```response
Hello, Books

2. Add a new book:
```endpoint 
POST: /books

```request
{
    "title": " The Whale",
    "author": "Herman Melville",
    "summary": "Moby-Dick; or, The Whale is an 1851 novel by Herman Melville. The book is the sailor Ishmael's narrative of the obsessive quest of Ahab, captain of the whaling ship Pequod, for revenge on Moby Dick, the giant white sperm whale that on the ship's previous voyage bit off Ahab's leg at the knee."
  }

```response
{
    "title": " The Whale",
    "author": "Herman Melville",
    "summary": "Moby-Dick; or, The Whale is an 1851 novel by Herman Melville. The book is the sailor Ishmael's narrative of the obsessive quest of Ahab, captain of the whaling ship Pequod, for revenge on Moby Dick, the giant white sperm whale that on the ship's previous voyage bit off Ahab's leg at the knee.",
    "_id": "654111dec55a4369c2b0c20d",
    "__v": 0
}

3. View a list of all books:
```endpoint
GET: /books

```response
[
    {
        "_id": "6540706021f2ee5f6015d06b",
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "summary": "To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature. The plot and characters are loosely based on Lee's observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was 10 years old.",
        "__v": 0
    },
    {...},
    {
        "_id": "654111dec55a4369c2b0c20d",
        "title": " The Whale",
        "author": "Herman Melville",
        "summary": "Moby-Dick; or, The Whale is an 1851 novel by Herman Melville. The book is the sailor Ishmael's narrative of the obsessive quest of Ahab, captain of the whaling ship Pequod, for revenge on Moby Dick, the giant white sperm whale that on the ship's previous voyage bit off Ahab's leg at the knee.",
        "__v": 0
    }
]

4. View details of a specific book by its ID:
```endpoint
GET: /books/:id

```response
{
    "_id": "654111dec55a4369c2b0c20d",
    "title": " The Whale",
    "author": "Herman Melville",
    "summary": "Moby-Dick; or, The Whale is an 1851 novel by Herman Melville. The book is the sailor Ishmael's narrative of the obsessive quest of Ahab, captain of the whaling ship Pequod, for revenge on Moby Dick, the giant white sperm whale that on the ship's previous voyage bit off Ahab's leg at the knee.",
    "__v": 0
}

5. Update a book's details:
```endpoint 
PUT: /books/:id

```request
{
    "title": "Moby-Dick; or, The Whale",
    "author": "Herman Melville",
    "summary": "Moby-Dick; or, The Whale is an 1851 novel by Herman Melville. The book is the sailor Ishmael's narrative of the obsessive quest of Ahab, captain of the whaling ship Pequod, for revenge on Moby Dick, the giant white sperm whale that on the ship's previous voyage bit off Ahab's leg at the knee."
  }

```response
{
    "_id": "654111dec55a4369c2b0c20d",
    "title": "Moby-Dick; or, The Whale",
    "author": "Herman Melville",
    "summary": "Moby-Dick; or, The Whale is an 1851 novel by Herman Melville. The book is the sailor Ishmael's narrative of the obsessive quest of Ahab, captain of the whaling ship Pequod, for revenge on Moby Dick, the giant white sperm whale that on the ship's previous voyage bit off Ahab's leg at the knee.",
    "__v": 0
}

6. Delete a book:
```endpoint
DELETE: /books/:id

```response
{
    "message": "Book deleted successfully"
}