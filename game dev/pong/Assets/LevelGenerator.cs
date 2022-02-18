using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LevelGenerator : MonoBehaviour
{
    public GameObject brick;
    // Start is called before the first frame update
    void Start()
    {
       
        for (int row=1; row < 10; row++)
        {
            for (int column = 0; column < 15; column++)
            {
                Vector3 position = new Vector3(column + 0.1f * column, -row / 3f, 0) + brick.transform.position;
                Instantiate(brick, position, Quaternion.identity);
                {
           
                }
            }
        }
        Update();
{
 
}

    }

    // Update is called once per frame
    void Update()
    {

    }
}
