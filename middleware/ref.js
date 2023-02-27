export default function({ route, redirect }) {
    const query = route.query;
    const slug = route.params.slug;

    if (query["fbclid"] != undefined) {
        return redirect('https://congvangvietnam.com/' + slug)
    }
}