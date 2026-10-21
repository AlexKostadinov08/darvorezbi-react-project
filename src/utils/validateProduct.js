

export function validate(values) {
    const errors = {};

    if (values.title.trim().length < 3) {
        errors.title = 'Заглавието трябва да е поне 3 символа';
    }

    if (Number(values.price) <= 0) {
        errors.price = 'Цената трябва да е положително число'
    }

    if (!values.image_url.startsWith("http")) {
        errors.image_url = 'Връзките на изображенията трябва да започват с http'
    }

    if (values.description.length < 10) {
        errors.description = 'Описанието трябва да е поне 10 символа'
    }

    if (values.category.length === 0) {
        errors.category = 'Трябва да изберете категория'
    }

    return errors
}