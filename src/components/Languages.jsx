import { useState } from 'react';
import React from 'react';
export default function Language({changeLanguage}) {
    const [lang, setLang] = React.useState('en-US');
    function changeLanguage(event) {
        setLang(event.target.value);
    }

    return (
        <html>
            <div>
                <select value={lang} onChange={changeLanguage}>
                    <option value="en-US">English</option>
                    <option value="zh-CN">Chinese</option>
                </select>
            </div>
        </html>
    );
}
