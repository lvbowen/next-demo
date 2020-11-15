const listData = [
    {
        id: '1',
        name: '名字1111',
    },
    {
        id: '2',
        name: '名字2222',
    },
    {
        id: '3',
        name: '名字3333',
    },
];

export default (req, res) => {
    res.statusCode = 200
    res.json({ 
        code: 0,
        message: 'success',
        result: listData,
     })
  }