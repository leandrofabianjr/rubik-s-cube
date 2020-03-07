class ColorPicker {

    _$picker

    constructor($elem, cb) {
        this._cb = cb;

        $elem.addEventListener('click', e => {
            console.log(e);
            
            this._$picker = this._buildPicker(cb);
            this._$picker.style.position = 'absolute';
            this._$picker.style.left = e.clientX + 'px';
            this._$picker.style.top = e.clientY + 'px';
            this._$picker.addEventListener('blur', () => this._removePicker());

            document.querySelector('body').appendChild(this._$picker);
        });
    }

    _buildPicker(cb) {
        let $picker = document.createElement('div');
        $picker.style.display = 'flex';
        $picker.style.flexWrap = 'wrap';
        $picker.style.width = '162px';
        $picker.style.backgroundColor = 'white';
        $picker.style.borderRadius = '4px';
        $picker.style.boxShadow = '1px 1px 2px 1px #bbb';
        
        ['orange', 'green', 'white', 'blue', 'red', 'yellow']
            .map(c => this._buildButton(c, cb))
            .map($btn => $picker.appendChild($btn));
        return $picker;
    }

    _buildButton(color, cb) {
        let $btn = document.createElement('span');
        $btn.style.width = '50px';
        $btn.style.height = '50px';
        $btn.style.backgroundColor = color;
        $btn.style.display = 'block';
        $btn.style.borderRadius = '4px';
        $btn.style.margin = '2px';
        $btn.addEventListener('click', () => {
            console.log('ccc');
            cb(color);
            this._removePicker();
        });
        return $btn;
    }

    _removePicker() {
        this._$picker.parentElement.removeChild(this._$picker);
    }
}