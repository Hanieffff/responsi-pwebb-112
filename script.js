document.addEventListener('DOMContentLoaded', () => {
    const books = [
        {
            title: "Laskar Pelangi",
            author: "Andrea Hirata",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa0cBIqHzO94_JmH3v20GQJe6C6cbd6syrkg&s.jpg",
        },
        {
            title: "Bumi Manusia",
            author: "Pramoedya Ananta Toer",
            image: "https://cdn.gramedia.com/uploads/items/bumi-manusia-edit.jpg",
        },
        {
            title: "Cantik Itu Luka",
            author: "Eka Kurniawan",
            image: "https://upload.wikimedia.org/wikipedia/id/thumb/d/d2/CiL_%28sampul%29.jpg/220px-CiL_%28sampul%29.jpg",
        },
        {
            title: "Rumah Kaca",
            author: "Pramoedya Ananta Toer",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX4v-uZsxTp6aDUpYCzguE-y3MxZoVzJhBVw&s.jpg",
        },
        {
            title: "Anak Semua Bangsa",
            author: "Pramoedya Ananta Toer",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT41hbpS0XsRv07xp9htZgyg8v7PzaDCP2Omg&s.jpg",
        }
    ];

    const bookList = document.getElementById('book-list');
    if (bookList) {
        books.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('book-item');
            bookItem.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>by ${book.author}</p>
            `;
            bookList.appendChild(bookItem);
        });
    }

    const orderList = document.getElementById('order-list');
    if (orderList) {
        fetch('orders.txt')
            .then(response => response.text())
            .then(data => {
                const orders = data.split('\n').filter(line => line);
                orders.forEach(order => {
                    const orderItem = document.createElement('div');
                    orderItem.textContent = order;
                    orderList.appendChild(orderItem);
                });
            });
    }
});
