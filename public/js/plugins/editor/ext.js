(function(Editor, markdownit, WebUploader){
    // Set default options
    var md = new markdownit();

    md.set({
      html:         false,        // Enable HTML tags in source
      xhtmlOut:     false,        // Use '/' to close single tags (<br />)
      breaks:       true,        // Convert '\n' in paragraphs into <br>
      langPrefix:   'language-',  // CSS language prefix for fenced blocks
      linkify:      false,        // Autoconvert URL-like text to links
      typographer:  false,        // Enable smartypants and other sweet transforms
    });

    window.markdowniter = md;

    var toolbar = Editor.toolbar;

    var replaceTool = function(name, callback){
        for(var i=0, len=toolbar.length; i<len; i++){
            var v = toolbar[i];
            if(typeof(v) !== 'string' && v.name === name){
                v.action = callback;
                break;
            }
        }
    };

    var $body = $('body');

    //添加连接工具
    var ToolLink = function(){
        var self = this;

        //this.$win = $([
        //    '<div class="modal fade" role="dialog" aria-labelledby="editorToolImageTitle" aria-hidden="true">',
        //        '<div class="modal-dialog">',
        //            '<div class="modal-content">',
        //                '<div class="modal-header">',
        //                    '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>',
        //                    '<h4 class="modal-title">添加连接</h4>',
        //                '</div>',
        //                '<div class="modal-body">',
        //                    '<form class="form-horizontal">',
        //                        '<div class="input-group">',
        //                            '<label class="control-label col-sm-3">标题</label>',
        //                            '<div class="col-sm-9">',
        //                                '<input class="form-control" type="text" name="title" placeholder="Title">',
        //                            '</div>',
        //                        '</div>',
        //                        '<div class="input-group">',
        //                            '<label class="control-label col-sm-3">连接</label>',
        //                            '<div class="col-sm-9">',
        //                                '<input class="form-control" type="text" name="link" value="http://" placeholder="Link">',
        //                            '</div>',
        //                        '</div>',
        //                '</form>',
        //                '</div>',
        //                '<div class="modal-footer">',
        //                    '<button class="btn btn-primary" role="save">确定</button>',
        //                    '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>',
        //                '</div>',
        //            '</div>',
        //        '</div>',
        //    '</div>'
        //].join('')).appendTo($body);

        this.$win = $([
            '<div class="am-modal" tabindex="-1">',
                '<div class="am-modal-dialog">',
                    '<div class="am-modal-hd">',
                        '添加标题',
                        '<a href="javascript: void(0)" class="am-close am-close-spin" data-am-modal-close>&times;</a>',
                    '</div>',
                    '<div class="am-modal-bd">',
                        '<form class="am-form">',
                            '<div class="am-form-group">',
                                '<label>标题</label>',
                                '<input class="am-modal-prompt-input" type="text" name="title" placeholder="Title">',
                            '</div>',
                            '<div class="am-form-group">',
                                '<label>连接</label>',
                                '<input class="am-modal-prompt-input" type="text" name="link" value="http://" placeholder="Link">',
                            '</div>',
                        '</form>',
                    '</div>',
                    '<div class="am-modal-footer">',
                        '<span class="am-modal-btn" role="save">确定</span>',
                        '<span class="am-modal-btn" data-am-modal-cancel>取消</span>',
                    '</div>',
                '</div>',
            '</div>'
        ].join('')).appendTo($body);


        this.$win.on('click', '[role=save]', function(){
            self.$win.find('form').submit();
        }).on('submit', 'form', function(){
            var $el = $(this);
            var title = $el.find('[name=title]').val();
            var link = $el.find('[name=link]').val();

            self.$win.modal('close');
            self.editor.push(' ['+ title +']('+ link +')');

            $el.find('[name=title]').val('');
            $el.find('[name=link]').val('http://');

            return false;
        });
    };

    ToolLink.prototype.bind = function(editor){
        this.editor = editor;
        //this.$win.modal('show');
        this.$win.modal();
    };

    //图片上传工具
    var ToolImage = function(){
        var self = this;

        //this.$win = $([
        //    '<div class="modal fade">',
        //        '<div class="modal-dialog">',
        //            '<div class="modal-content">',
        //                '<div class="modal-header">',
        //                    '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>',
        //                    '<h4 class="modal-title">图片</h4>',
        //                '</div>',
        //                '<div class="modal-body">',
        //                    '<div class="upload-img">',
        //                        '<div id="upload" class="btn btn-primary">上传图片</div>',
        //                        '<span class="tip"></span>',
        //                        '<div class="alert alert-error hide"></div>',
        //                    '</div>',
        //                '</div>',
        //                '<div class="modal-footer">',
        //                    '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>',
        //                '</div>',
        //            '</div>',
        //        '</div>',
        //    '</div>'
        //].join('')).appendTo($body);

        this.$win = $([
            '<div class="am-modal" tabindex="-1">',
                '<div class="am-modal-dialog">',
                    '<div class="am-modal-hd">',
                        '图片',
                        '<a href="javascript: void(0)" class="am-close am-close-spin" data-am-modal-close>&times;</a>',
                    '</div>',
                    '<div class="am-modal-bd">',
                        '<div class="upload-img">',
                            '<div id="upload" class="am-btn am-btn-primary">上传图片</div>',
                            '<span class="tip"></span>',
                            '<div class="alert alert-error hide"></div>',
                        '</div>',
                    '</div>',
                    '<div class="am-modal-footer">',
                        '<span class="am-modal-btn" role="save">确定</span>',
                        '<span class="am-modal-btn" data-am-modal-cancel>取消</span>',
                    '</div>',
                '</div>',
            '</div>'
        ].join('')).appendTo($body);

        this.$upload = this.$win.find('.upload-img').css({
            height: 50,
            padding: '60px 0',
            textAlign: 'center',
            border: '4px dashed#ddd'
        });

        //this.$uploadBtn = this.$upload.find('#upload').css({
        //    width: 86,
        //    height: 40,
        //    margin: '0 auto'
        //});
        this.$uploadBtn = this.$upload.find('#upload');

        this.$uploadTip = this.$upload.find('.tip').hide();

        this.file = false;
        //var _csrf = $('[name=_csrf]').val();

        this.uploader = WebUploader.create({
            swf: '/public/js/plugins/webuploader/Uploader.swf',
            //server: '/upload?_csrf=' + _csrf,
            server:'/upload/upload',
            pick: this.$uploadBtn[0],
            paste: document.body,
            dnd: this.$upload[0],
            auto: true,
            fileSingleSizeLimit: 2 * 1024 * 1024,
            //sendAsBinary: true,
            // 只允许选择图片文件。
            accept: {
                title: 'Images',
                extensions: 'gif,jpg,jpeg,bmp,png',
                mimeTypes: 'image/*'
            }
        });

        this.uploader.on('beforeFileQueued', function(file){
            if(self.file !== false || !self.editor){
                return false;
            }
            self.showFile(file);
        });

        this.uploader.on('uploadProgress', function(file, percentage){
            // console.log(percentage);
            self.showProgress(file, percentage * 100);
        });

        this.uploader.on('uploadSuccess', function(file, res){
            if(res.success){
                self.$win.modal('close');
                self.editor.push('!['+ file.name +']('+ res.url +')');
            }
            else{
                self.removeFile();
                self.showError(res.msg || '服务器走神了，上传失败');
            }
        });

        this.uploader.on('uploadComplete', function(file){
            self.uploader.removeFile(file);
            self.removeFile();
        });

        this.uploader.on('error', function(type){
            self.removeFile();
            switch(type){
                case 'Q_EXCEED_SIZE_LIMIT':
                case 'F_EXCEED_SIZE':
                    self.showError('文件太大了, 不能超过2M');
                    break;
                case 'Q_TYPE_DENIED':
                    self.showError('只能上传图片');
                    break;
                default:
                    self.showError('发生未知错误');
            }
        });

        this.uploader.on('uploadError', function(){
            self.removeFile();
            self.showError('服务器走神了，上传失败');
        });
    };

    ToolImage.prototype.removeFile = function(){
        //var self = this;
        this.file = false;
        this.$uploadBtn.show();
        this.$uploadTip.hide();
    };

    ToolImage.prototype.showFile = function(file){
        //var self = this;
        this.file = file;
        this.$uploadBtn.hide();
        this.$uploadTip.html('正在上传: ' + file.name).show();
        this.hideError();
    };

    ToolImage.prototype.showError = function(error){
        this.$upload.find('.alert-error').html(error).show();
    };

    ToolImage.prototype.hideError = function(error){
        this.$upload.find('.alert-error').hide();
    };

    ToolImage.prototype.showProgress = function(file, percentage){
        this.$uploadTip
            .html('正在上传: ' + file.name + ' ' + percentage + '%')
            .show();
    };

    ToolImage.prototype.bind = function(editor){
        this.editor = editor;
        //this.$win.modal('show');
        this.$win.modal();
    };

    var toolImage = new ToolImage();
    var toolLink = new ToolLink();

    replaceTool('image', function(editor){
        toolImage.bind(editor);
    });
    replaceTool('link', function(editor){
        toolLink.bind(editor);
    });

    //当编辑器取得焦点时，绑定 toolImage；
    var createToolbar = Editor.prototype.createToolbar;
    Editor.prototype.createToolbar = function(items){
        createToolbar.call(this, items);
        var self = this;
        $(self.codemirror.display.input).on('focus', function(){
            toolImage.editor = self;
        });
    };

    //追加内容
    Editor.prototype.push = function(txt){
        var cm = this.codemirror;
        var line = cm.lastLine();
        cm.setLine(line, cm.getLine(line) + txt);
    };
})(window.Editor, window.markdownit, window.WebUploader);