const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data Received!");
        }, 2000);
    });
};

async function getData() {
    console.log("Lording ...");  

    try {
        const result = await fetchData();
        console.log("Success:", result);
    } catch (error) {
        console.log("Error:", error); 
    }
}

getData()