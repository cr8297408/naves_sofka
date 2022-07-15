async function findPagination(sequelize, sizeAsNumber,pageAsNumber, query){
  try {
    let page = 0;
    if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0 ) {
        page = pageAsNumber - 1;
    }

    let size = 10;
    if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber <= 10) {
        size = sizeAsNumber;
    }

    const offset = page*size;
      
    const pages = await sequelize.query(`${query} LIMIT ${offset},${size}`);
    return pages[0];

  } catch (error) {
      throw new Error(error.message);
  }
}

module.exports = findPagination;