const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        console.log(req.session.user_id);
        console.log(req.params.id);
        const postData = await Post.update({
            ...req.body,
            user_id: req.session.user_id,
        }, 
        { where: {
            id: req.params.id
        },
        });
        
        res.json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id
            }
        });

        res.json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;