const Collection = () => {
    return (
      <div>
        
        <main className="container mx-auto p-8 text-center">
          <h1 className="text-4xl font-bold">Our Collection</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="border p-4">
              <h3 className="text-xl">Item 1</h3>
              <p>Description of item 1.</p>
            </div>
            <div className="border p-4">
              <h3 className="text-xl">Item 2</h3>
              <p>Description of item 2.</p>
            </div>
            <div className="border p-4">
              <h3 className="text-xl">Item 3</h3>
              <p>Description of item 3.</p>
            </div>
          </div>
        </main>
        
      </div>
    );
  };
  
  export default Collection;