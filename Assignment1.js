function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }
  
  module.exports = {
    getFibonacciSequence: (req, res) => {
      const n = parseInt(req.params.n, 10); 
      if (isNaN(n) || n <= 0) {
        return res.status(400).json({ error: "Invalid input. Please provide a positive integer." });
      }
      const sequence = fibonacci(n); 
      return res.json({ sequence }); 
    }
  };
