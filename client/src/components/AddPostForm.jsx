import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { Button, TextField, Select, Input, MenuItem, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import FileBase64 from 'react-file-base64'
import { createPost } from '../actions/post'

const useStyles = makeStyles((theme) => ({  // mui styles
    paper: {
        padding: theme.spacing(2)
    },
    textField: {
        marginBottom: theme.spacing(2)
    }
}))

const tags = ["Programing", "fun", "healt", "science"]  //our content tags 

const postSchema = yup.object().shape({  // i create a yup schema for form validation
    title: yup.string(),
    subtitle: yup.string(),
    content: yup.string().min(20),
    tag: yup.mixed().oneOf(tags)
})

export const AddPostForm = ({ open, handleClose }) => {

    const [file, setFile] = useState(null)
    const dispatch = useDispatch();
    // console.log(handleClose)

    const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
        resolver: yupResolver(postSchema)
    });

    const onSubmit = (data) => {
        // console.log(data)
        dispatch(createPost({ ...data, image: file }))
        clearForm()
    }

    const clearForm = () => {
        reset() //reset is coming react hook form and reset our form
        setFile(null) // remove file in our state
        handleClose() // close dialog
    }

    const classes = useStyles();
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle >Yeni Yazı Oluştur</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Yeni bir yazı eklemek için aşağıdaki formu doldurun.
                </DialogContentText>
                <div className={classes.root}>
                    <form noValidate onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            id='title'
                            label="Başlık"
                            name='title'
                            variant='outlined'
                            className={classes.textField}
                            size="small"
                            error={errors.title ? true : false}
                            fullWidth
                            {...register('title')} // connection with yup postSchema
                        />
                        <TextField
                            id='subtitle'
                            label="Alt Başlık"
                            name='subtitle'
                            variant='outlined'
                            className={classes.textField}
                            size="small"
                            error={errors.subtitle ? true : false}
                            fullWidth
                            {...register('subtitle')} // connection with yup postSchema
                        />
                        <Controller
                            render={() => (
                                <Select
                                    imput={<Input />}
                                    className={classes.textField}
                                    fullWidth
                                >
                                    {
                                        tags.map((tag, index) => (
                                            // console.log(tags[0]),
                                            <MenuItem key={index} value={tag}>
                                                {tag}
                                            </MenuItem>
                                        ))
                                    }
                                </Select>
                            )
                            }

                            name="tag"
                            control={control}
                            error={errors.tag ? true : false}
                            defaultValue={tags[0]}
                        />

                        <TextField
                            id='content'
                            label="İçerik"
                            name='content'
                            multiline
                            rows={4}
                            variant='outlined'
                            className={classes.textField}
                            size="small"
                            error={errors.content ? true : false}
                            fullWidth
                            {...register('content')} // connection with yup postSchema
                        />
                        <FileBase64 multiple={false}
                            onDone={({ base64 }) => setFile(base64)}  // if is it called set uploaded file  in our state
                        />

                    </form>
                </div>
            </DialogContent>
            <DialogActions>
                <Button color='inherit' onClick={clearForm}>Vazgeç</Button>
                <Button
                    type="submit"
                    variant='outlined'
                    color="primary"
                    onClick={() => handleSubmit(onSubmit)()} // because out of form
                >
                    Yayınla
                </Button>
            </DialogActions >
        </Dialog >
    )
}
