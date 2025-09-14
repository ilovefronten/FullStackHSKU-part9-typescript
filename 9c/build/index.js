"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3001;
const BASE_URL = '/api';
app.get(`${BASE_URL}/ping`, (_req, res) => {
    console.log('get pinged.');
    res.send('pong');
});
app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}!`);
});
