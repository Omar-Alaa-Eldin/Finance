# C$50 Finance App

![Cover Image](https://github.com/Omar-Alaa-Eldin/Finance/blob/main/static/finance.png)

A web application that allows users to manage a virtual stock portfolio. Users can simulate buying, selling, and managing stocks in real-time. This project was developed as a final project for CS50's Introduction to Computer Science.

---

### ✨ Features

* **User Authentication:** Secure registration and login functionality.
* **Real-time Stock Quotes:** Look up real-time stock prices using a live API.
* **Virtual Portfolio:** View your current stock holdings, number of shares, and total value.
* **Buy/Sell Stocks:** Simulate buying and selling stocks with a virtual cash balance.
* **Transaction History:** View a complete history of all your buy and sell transactions.
* **Cash Management:** Add additional cash to your account to simulate deposits.
* **Password Management:** Users can securely change their password.
* **Dark/Light Mode:** A toggle for a comfortable viewing experience in any environment.

---

### 💻 Technologies Used

* **Backend:** Flask (Python)
* **Frontend:** HTML, CSS, JavaScript, Bootstrap 5
* **Database:** SQLite
* **External APIs:** CS50 Finance API for stock data

---

### 🚀 Getting Started

To run this project locally, follow these steps.

#### Prerequisites

* Python 3.x installed
* Git installed

#### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Omar-Alaa-Eldin/Finance.git
    cd Finance
    ```

2.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

3.  **Set up the database:**
    Create a new SQLite database named `finance.db`. You can do this by running a simple command from the `cs50` library:
    ```bash
    flask run
    # This will likely create the database file if it doesn't exist. You might need to add a "users" and "transactions" table manually first.
    ```
    Alternatively, you can create the tables manually using SQL. Here are the schemas:
    ```sql
    CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        username TEXT NOT NULL,
        hash TEXT NOT NULL,
        cash NUMERIC NOT NULL DEFAULT 10000.00
    );

    CREATE TABLE transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        user_id INTEGER NOT NULL,
        symbol TEXT NOT NULL,
        shares INTEGER NOT NULL,
        price NUMERIC NOT NULL,
        transacted DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
    );
    ```

4.  **Run the application:**
    ```bash
    flask run
    ```
    The application will now be running on `http://127.0.0.1:5000`.

---

### 🎥 Usage Video

To see a full demonstration of the application's features, you can watch a short video here:

[![Watch the demo video](https://drive.google.com/file/d/1A0Pb6gAb6vHwDyn9lGL6hOOQaSrspGnu/view?usp=sharing)](https://drive.google.com/file/d/1A0Pb6gAb6vHwDyn9lGL6hOOQaSrspGnu/view?usp=sharing)

---

### 👤 User Guide

**1. Registration & Login:**
* Navigate to `/register` to create a new account.
* After registering, log in with your credentials. You will start with $10,000.00 in cash.

**2. Portfolio (`/`):**
* This page displays your current holdings, including the total value of your stocks and your remaining cash.
* You can also buy and sell stocks directly from this page using the input fields next to each stock.

**3. Quote (`/quote`):**
* Enter a stock symbol (e.g., `AAPL`, `GOOG`) to look up its current price.

**4. Buy (`/buy`):**
* Enter a stock symbol and the number of shares you wish to purchase. The application will check if you have enough cash to complete the transaction.

**5. Sell (`/sell`):**
* Choose a stock you own from the dropdown menu and specify the number of shares to sell. The application will ensure you own enough shares for the transaction.

**6. History (`/history`):**
* View a list of all your past transactions, including the stock, number of shares, price, and timestamp.

---

### 📄 License

This project is licensed under the MIT License.
