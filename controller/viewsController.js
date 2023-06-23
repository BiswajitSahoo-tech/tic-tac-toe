exports.getWavePage = (req, res, next)=> {
    const ids = req.params.peerids
    const arr = ids.split(',')
    const id1 = arr[0], id2 =arr[1];
    console.log('at getWavePage')
    console.log(id1, id2)
    res.status(200).render('home',{
        title: 'Home',
        id1,
        id2
    })
}