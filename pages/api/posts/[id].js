const listData = [
    {
        id: '1',
        age: 18,
        sex: '男',
        address: '湖北省'
    },
    {
        id: '2',
        age: 19,
        sex: '女',
        address: '湖南省'
    },
    {
        id: '3',
        age: 20,
        sex: '男',
        address: '北京市'
    },
];

export default (req, res) => {
    const { id } = req.query;
    const result = listData.find((item) => item.id === id);
    res.statusCode = 200
    res.json({ 
        code: 0,
        message: 'success',
        result,
     })
  }