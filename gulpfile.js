var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require('gulp-autoprefixer');
var notify = require("gulp-notify");
var htmlmin = require('gulp-htmlmin');
var cache = require('gulp-cache');
var concat = require('gulp-concat');
var reset_heroi = require('browser-sync').create();

// Transforma o Sass(SCSS) da pasta source em CSS levando para a pasta dist (Pasta de Produção)
gulp.task('thor', function () {
    return gulp.src('./source/sass/**')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer({browsers:['last 4 version'], cascade:false}))
        .on('error', notify.onError({
            title: 'Erro no Scss, há erros no teu código!',
            message: '<%= error.message %>'
        }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(reset_heroi.stream());
});

// Minifica o Javascript/Jquery da pasta source levando para a pasta dist/js (Pasta de Produção)
gulp.task('mulher-elastico', function () {
    return gulp.src([
        // *** OBS: Ordem que será adicionado os arquivos minificados ***
        './node_modules/jquery/dist/jquery.js',
        './node_modules/bootstrap/dist/js/bootstrap.bundle.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './source/js/**'
        ]
    )
        //Nome do arquivo final
        .pipe(concat('app.js'))
        // local do arquivo final
        .pipe(gulp.dest('./dist/js'));
});

// Minifica o HTML/PHP da pasta source levando para a pasta ./ (Pasta de Produção)
gulp.task('stan-lee', function () {
    return gulp.src('./source/php/**')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./'));
});


// Atualiza o navegador automaticamente
gulp.task('reset_heroi', function () {
    reset_heroi.init({

        // local do projeto, pasta que será atualizada conforme save do desenvolvedor
        proxy:'informar-local-da-pasta',

        // ABRIR UM LINK em varios aparelhos na mesma rede.
        // open: "external

        open:"external",
    })
});

// Limpa o cache do navegador
gulp.task('flash', () =>
    cache.clearAll()
);

//Tasks para atualizar os arquivos conforme alteração do projeto
gulp.task('demolidor', function () {
    gulp.watch('./source/sass/**', gulp.parallel('thor','flash'));
    gulp.watch('./source/js/**/**', gulp.parallel('mulher-elastico','flash')).on('change', reset_heroi.reload);
    gulp.watch('./source/php/**', gulp.parallel('stan-lee','flash')).on('change', reset_heroi.reload);
});

//Tasks default inicializa todas as tasks.
gulp.task('default',
    gulp.parallel(
        'thor',
        'mulher-elastico',
        'demolidor',
        'stan-lee',
        'flash',
        'reset_heroi'
    )
);
