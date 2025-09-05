function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}
// callback hell
getData(1, () => {
    console.log("getting data2 ....");
    getData(2, () => {
        console.log("getting data3 ....");
        getData(3, () => {
            console.log("getting data4 ....");
            getData(4);
        });
    });
});

// Promise Chain
getData(1)
  .then((res) => {
    console.log(res);  // Data 1
    return getData(2);
  })
  .then((res) => {
    console.log(res);  // Data 2
    return getData(3);
  })
  .then((res) => {
    console.log(res);  // Data 3
  });