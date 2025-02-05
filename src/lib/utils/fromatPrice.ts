const formatPrice = (value: number, locale: 'us' | 'id') => {
    const formatter = new Intl.NumberFormat(locale === 'us' ? 'en-US' : 'id-ID', {
        style: 'currency',
        currency: locale === 'us' ? 'USD' : 'IDR',
    });
    return formatter.format(value);
}

export { formatPrice }