const BaseStyles = {
    generic_box_shadow: 'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 11px',
    generic_border: '1px solid #f1f1f1',
    generic_bg: '#db4c3f',
    box_overlay: `
        -webkit-box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 11px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 11px;
        position: absolute;
        width: 100%;
        z-index: 1;
        top: 85px;
        border-radius: 3px;
    `,
    va_center: `
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
    `,
    va_left: `
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: left;
        -ms-flex-pack: left;
        justify-content: left;
    `,
    no_select: `
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    `,
    cancel: `
        color: #555;
        cursor: pointer;
        font-size: 14px;
        margin: 2px 5px;
    `,
    transparent_button: `
        background-color: transparent;
        border: 0;
    `,
    task_item:`
        list-style-type: none;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        line-height: 18px;
        color: #333;
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 14px;
        list-style-type: none;
        border-bottom: 1px solid #f0f0f0;
        padding-left: 10px;
        cursor: pointer;

        :hover {
            background-color: #f9f9f9;
        }
    `
};

export default BaseStyles;