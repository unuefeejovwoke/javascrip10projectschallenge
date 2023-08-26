const search = () => {
    const searchbox = document.getElementById("search-item").value.trim().toUpperCase();
    const storeitems = document.getElementById("product-list");
    const product = document.querySelectorAll('.product');
    const pname = storeitems.getElementsByTagName('h2');

    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h2')[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML;

            // Clear previous background styles and reset text
            match.innerHTML = textvalue;
            match.style.backgroundColor = "initial";

            if (searchbox && textvalue.toUpperCase().includes(searchbox)) {
                product[i].style.display = "";

                const startIndex = textvalue.toUpperCase().indexOf(searchbox);
                const matchedText = textvalue.substr(startIndex, searchbox.length);

                // Create a new span element to highlight the matched text
                const highlightedText = `<span style="background-color: #ffab1b;">${matchedText}</span>`;
                const newText = textvalue.replace(matchedText, highlightedText);
                match.innerHTML = newText;
            } else {
                product[i].style.display = "none";
            }
        }
    }
};
