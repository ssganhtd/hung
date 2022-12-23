export default function({ route, redirect }) {
    const query = route.query;
    const slug = route.params.slug;

    if (query["fbclid"] != undefined) {
        return redirect('https://newspaper24hr.com/' + slug)
    }
}