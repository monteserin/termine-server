import Cloudinary from 'cloudinary';
import {cloud_name, api_key, api_secret} from '../../../application/config/cloudinary';

const {uploader, config} = Cloudinary.v2;

config({cloud_name, api_key, api_secret});

export const uploadStream = (fileBuffer, options) => new Promise((resolve, reject) => {
    uploader.upload_stream(options, (error, result) => {
        if (error) {
            reject(error);
        } else {
            resolve(result);
        }
    }).end(fileBuffer);
});

export const removeFile = public_id => new Promise((resolve, reject) => uploader.destroy(public_id, (err) => {
    if (err) {
        reject(err);
    } else {
        resolve();
    }
}));