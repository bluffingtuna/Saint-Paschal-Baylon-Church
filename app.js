import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import exphbs from 'express-handlebars';
import expressValidator from 'express-validator';
import session from 'express-session';
import mongo from 'mongodb';
import mongoose from 'mongoose';
import logger from 'morgan';