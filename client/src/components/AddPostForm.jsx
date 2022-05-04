import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Button, TextField, Select, Input, MenuItem, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

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
    // console.log(handleClose)

    const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
        resolver: yupResolver(postSchema)
    });

    const classes = useStyles();
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle >Yeni Yazı Oluştur</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Yeni bir yazı eklemek için aşağıdaki formu doldurun.
                </DialogContentText>
                <div className={classes.root}>
                    <form noValidate >
                        <TextField
                            id='title'
                            label="Başlık"
                            name='title'
                            variant='outlined'
                            className={classes.textField}
                            size="small"
                            error={errors.title ? true : false}
                            fullWidth
                            inputRef={register} // connection with yup postSchema
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
                            inputRef={register} // connection with yup postSchema
                        />
                        <Controller
                            render={({ field }) => (
                                <Select
                                    imput={<Input />}
                                    className={classes.textField}
                                    fullWidth
                                >
                                    {
                                        tags.map((tag, index) => (
                                            console.log(field),
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
                            label="Alt Başlık"
                            name='content'
                            multiline
                            rows={4}
                            variant='outlined'
                            className={classes.textField}
                            size="small"
                            error={errors.content ? true : false}
                            fullWidth
                            inputRef={register} // connection with yup postSchema
                        />
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}
